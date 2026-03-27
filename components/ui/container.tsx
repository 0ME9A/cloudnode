import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The element tag to render (e.g., "div", "section", "main")
   * @default "div"
   */
  as?: React.ElementType;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ as: Component = "div", className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "container mx-auto px-4 md:px-6 space-y-8 py-12 md:py-18 lg:py-24", // Default container styles
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Container.displayName = "Container";

type TContainerWrapper = {
  className?: string;
  children?: React.ReactNode;
}

const ContainerWrapper = ({ className, children }: TContainerWrapper) => {
  return (
    <div className='p-2 md:p-4 relative'>
      <div className={cn('max-w-500 mx-auto rounded-4xl md:rounded-[40px] relative overflow-hidden', className)}>{children}</div>
    </div>
  )
}

export { Container, ContainerWrapper };
