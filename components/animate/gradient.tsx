import React from 'react';

const MeshBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative w-full overflow-hidden bg-[#010037]">
            {/* SVG Background Layer */}
            <svg
                className="absolute inset-0 h-full w-full pointer-events-none"
                viewBox="0 0 1000 500"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Large blur creates the "glow" effect */}
                    <filter id="blur" filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="100" />
                    </filter>

                    {/* Fractal Noise creates the "grain" texture */}
                    <filter id="noise" x="0" y="0" width="100%" height="100%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" result="turbulence" />
                        <feBlend in="SourceGraphic" in2="turbulence" mode="overlay" />
                    </filter>
                </defs>

                {/* Base Layer */}
                <rect width="100%" height="100%" fill="#010037" />

                {/* Mesh Color Blobs */}
                <g filter="url(#blur)" opacity="1">
                    <rect x="261" y="211" width="261" height="194" fill="#FFFFFF" />
                    <rect x="567" y="93" width="762" height="667" fill="#E5E5E5" />
                    <rect x="135" y="310" width="156" height="273" fill="#000B39" />
                    <rect x="192" y="36" width="684" height="504" fill="#001131" />
                    <rect x="-244" y="84" width="747" height="747" fill="#120041" />
                </g>

                {/* Noise Overlay */}
                <rect
                    width="100%"
                    height="100%"
                    style={{ mixBlendMode: 'soft-light', filter: 'url(#noise)', opacity: '0.15' }}
                />
            </svg>

            {/* Content Layer */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default MeshBackground;
