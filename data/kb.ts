import { TKBCatogary } from "@/type";
import { TKBArticle } from "@/type";

export const CATEGORIES: TKBCatogary[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    desc: "Basic guides on how to access and secure your new RDP server.",
    articleCount: 3,
    coverImage: {
      src: "https://images.unsplash.com/photo-1584907797015-7554cd315667?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Getting Started Cover Image",
    },
    route: "/knowledge-base/getting-started",
  },
  {
    id: "server-management",
    title: "Server Management",
    desc: "Tutorials on managing resources, rebooting, and reinstalling OS.",
    articleCount: 1,
    coverImage: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=3134&auto=format&fit=crop",
      alt: "Server Management Cover Image",
    },
    route: "/knowledge-base/server-management",
  },
  {
    id: "billing",
    title: "Billing & Accounts",
    desc: "Information regarding payments, invoices, upgrades, and renewals.",
    articleCount: 1,
    coverImage: {
      src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=3270&auto=format&fit=crop",
      alt: "Billing & Accounts Cover Image",
    },
    route: "/knowledge-base/billing",
  },
  {
    id: "software",
    title: "Software & Settings",
    desc: "How to install typical applications, setup browsers, and VPNs.",
    articleCount: 2,
    coverImage: {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop",
      alt: "Software & Settings Cover Image",
    },
    route: "/knowledge-base/software",
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    desc: "Common errors, connection issues, and their fixes.",
    articleCount: 1,
    coverImage: {
      src: "https://plus.unsplash.com/premium_photo-1661645630542-bafa70898f3c?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Troubleshooting Cover Image",
    },
    route: "/knowledge-base/troubleshooting",
  },
  {
    id: "policies",
    title: "Policies & Terms",
    desc: "Our rules, SLA guarantees, and fair use guidelines.",
    articleCount: 1,
    coverImage: {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop",
      alt: "Policies & Terms Cover Image",
    },
    route: "/knowledge-base/policies",
  },
];

export const MOCK_KB_ARTICLE: TKBArticle[] = [
  {
    id: "kb-1",
    slug: "how-to-connect-to-your-new-rdp",
    title: "How to Connect to Your New RDP Server",
    excerpt:
      "A step-by-step guide on connecting to your newly purchased Windows RDP via Remote Desktop Connection.",
    content: `
      <h2 class="text-2xl font-semibold mb-4 mt-8">Connecting to Your RDP</h2>
      <p class="mb-4 text-muted-foreground">Once your CloudNode RDP server is provisioned, you will receive an email with the IP Address, Username, and Password. Here is how to use them to connect.</p>
      
      <ol class="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
        <li>Open the Start Menu on your Windows PC and search for <strong>Remote Desktop Connection</strong>.</li>
        <li>In the "Computer" field, enter the IP address of your server.</li>
        <li>Click "Connect".</li>
        <li>When prompted, enter your Username (usually Administrator) and the Password provided.</li>
        <li>If you see a certificate warning, check 'Don't ask me again' and click "Yes".</li>
      </ol>
      
      <h3 class="text-xl font-semibold mb-4 mt-8">Video Tutorial</h3>
      <p class="mb-4 text-muted-foreground">Prefer watching a video? Check out our official guide below:</p>
      <div class="relative w-full aspect-video rounded-xl overflow-hidden my-8 shadow-lg border border-border/50">
        <iframe 
          src="https://www.youtube.com/embed/FoGrz4I29Z0?si=L4vYg06L3Ea91Qh8" 
          title="How to Use Remote Desktop Connection in Windows 10" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
          class="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
      
      <p class="mb-4 text-muted-foreground">You are now connected to your remote desktop!</p>
    `,
    category: "getting-started",
    coverImage: {
      src: "https://img.youtube.com/vi/FoGrz4I29Z0/maxresdefault.jpg",
      alt: "How to Use Remote Desktop Connection in Windows 10 Thumbnail",
    },
    author: {
      name: "CloudNode RDP Support",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    tags: ["RDP", "Connection", "Windows"],
    readingTimeMinutes: 3,
    publishedAt: "2024-03-01T10:00:00Z",
    updatedAt: "2024-03-01T10:00:00Z",
    seo: {
      metaTitle: "How to Connect to RDP | CloudNode RDP KB",
      metaDescription:
        "Learn how to establish your first connection to your new CloudNode RDP server.",
    },
  },
  {
    id: "kb-1-android",
    slug: "how-to-use-windows-rdp-in-mobile",
    title: "How To Use Windows RDP in Mobile",
    excerpt:
      "A simple way to use and connect to your Windows RDP directly from your Android mobile device.",
    content: `
      <h2 class="text-2xl font-semibold mb-4 mt-8">Connecting from Android</h2>
      <p class="mb-4 text-muted-foreground">You don't always need a computer to manage your server! You can easily connect to your Windows RDP using the official Microsoft Remote Desktop app on your Android device.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-8">Prerequisites</h3>
      <ul class="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
        <li>An Android smartphone or tablet.</li>
        <li>Your CloudNode RDP Server IP Address, Username (Administrator), and Password.</li>
        <li>The <strong>Remote Desktop</strong> app by Microsoft Corporation installed from the Google Play Store.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-8">Step-by-Step Guide</h3>
      <ol class="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
        <li>Open the <strong>Remote Desktop</strong> app on your Android device.</li>
        <li>Tap the <strong>+ (Plus)</strong> icon in the top right corner and select <strong>Add PC</strong>.</li>
        <li>In the <strong>PC name</strong> field, enter your server's IP address.</li>
        <li>(Optional) Under <strong>User account</strong>, tap 'Ask when required' and add your Username and Password to save them for quick access later.</li>
        <li>Tap <strong>Save</strong> at the top right.</li>
        <li>You will now see a card representing your server. Tap on it.</li>
        <li>If prompted with a certificate warning, check 'Never ask again for connections to this PC' and tap <strong>Connect</strong>.</li>
      </ol>
      
      <h3 class="text-xl font-semibold mb-4 mt-8">Video Tutorial</h3>
      <p class="mb-4 text-muted-foreground">Watch the official guide on setting up your Android RDP connection:</p>
      <div class="relative w-full aspect-video rounded-xl overflow-hidden my-8 shadow-lg border border-border/50">
        <iframe 
          src="https://www.youtube.com/embed/KJtMBAGpcO4?si=N2W5y3O-t9LkTUuV" 
          title="How To Use Windows RDP in Mobile | Simple Way To Use RDP in Android Mobile" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
          class="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
      
      <p class="mb-4 text-muted-foreground">You now have full control of your Windows server right from your pocket!</p>
    `,
    category: "getting-started",
    coverImage: {
      src: "https://img.youtube.com/vi/KJtMBAGpcO4/maxresdefault.jpg",
      alt: "How To Use Windows RDP in Mobile Thumbnail",
    },
    author: {
      name: "CloudNode RDP Support",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    tags: ["RDP", "Android", "Mobile", "Connection"],
    readingTimeMinutes: 4,
    publishedAt: "2024-03-01T15:00:00Z",
    updatedAt: "2024-03-01T15:00:00Z",
    seo: {
      metaTitle: "How to Connect to RDP on Android | CloudNode RDP KB",
      metaDescription:
        "Learn how to use Windows RDP on your Android mobile device using the official Microsoft Remote Desktop app.",
    },
  },
  {
    id: "kb-1-mac",
    slug: "how-to-connect-rdp-in-macbook",
    title: "How To Connect RDP in MacBook",
    excerpt:
      "A simple guide to using Windows RDP on your Mac using the official Microsoft Remote Desktop app.",
    content: `
      <h2 class="text-2xl font-semibold mb-4 mt-8">Connecting from a Mac</h2>
      <p class="mb-4 text-muted-foreground">Connecting to your Windows RDP from macOS is straightforward thanks to the official Microsoft Remote Desktop app available on the Mac App Store.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-8">Prerequisites</h3>
      <ul class="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
        <li>A Mac running macOS.</li>
        <li>Your CloudNode RDP Server IP Address, Username (Administrator), and Password.</li>
        <li>The <strong>Microsoft Remote Desktop</strong> app installed from the Mac App Store.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-8">Step-by-Step Guide</h3>
      <ol class="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
        <li>Open the <strong>Microsoft Remote Desktop</strong> app on your Mac.</li>
        <li>Click the <strong>Add PC</strong> button (or the <strong>+</strong> icon and select <strong>Add PC</strong>).</li>
        <li>In the <strong>PC name</strong> field, enter your server's IP address.</li>
        <li>(Optional) In the <strong>User account</strong> dropdown, you can add and save your Administrator username and password.</li>
        <li>Click <strong>Add</strong> to save the connection.</li>
        <li>Double-click the new PC thumbnail to connect.</li>
        <li>If you see a certificate warning, click <strong>Continue</strong> to establish the connection.</li>
      </ol>
      
      <h3 class="text-xl font-semibold mb-4 mt-8">Video Tutorial</h3>
      <p class="mb-4 text-muted-foreground">Watch the visual guide below to see the complete setup process on macOS:</p>
      <div class="relative w-full aspect-video rounded-xl overflow-hidden my-8 shadow-lg border border-border/50">
        <iframe 
          src="https://www.youtube.com/embed/palWx-Ol8RA?si=X1a2B3C4D5E6F7G8" 
          title="How To Connect RDP in MacBook | Simple Way To Use Windows RDP in Mac" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
          class="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    `,
    category: "getting-started",
    coverImage: {
      src: "https://img.youtube.com/vi/palWx-Ol8RA/maxresdefault.jpg",
      alt: "How To Connect RDP in MacBook Thumbnail",
    },
    author: {
      name: "CloudNode RDP Support",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    tags: ["RDP", "Mac", "macOS", "Connection", "Connect from Mac"],
    readingTimeMinutes: 4,
    publishedAt: "2024-03-01T16:00:00Z",
    updatedAt: "2024-03-01T16:00:00Z",
    seo: {
      metaTitle: "How to Connect to RDP on Mac | CloudNode RDP KB",
      metaDescription:
        "Learn how to connect to your Windows RDP from a MacBook using the Microsoft Remote Desktop application.",
    },
  },
  {
    id: "kb-2",
    slug: "how-to-change-rdp-password",
    title: "How to Change Your Server Password",
    excerpt:
      "Learn how to secure your server by updating the default administrator password.",
    content: `
      <h2 class="text-2xl font-semibold mb-4 mt-8">Securing Your Server</h2>
      <p class="mb-4 text-muted-foreground">It is highly recommended to change your password immediately after your first login.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-8">Steps</h3>
      <ol class="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
        <li>Log into your RDP server.</li>
        <li>Press <code>Ctrl + Alt + End</code> (this simulates Ctrl+Alt+Del on the remote machine).</li>
        <li>Select <strong>Change a password</strong>.</li>
        <li>Enter your old password, then your new password twice.</li>
        <li>Press Enter to confirm.</li>
      </ol>
      <p class="mb-4 text-muted-foreground">Be sure to safely store your new password where you won't lose it, as we cannot recover the password for you if lost.</p>

      <h3 class="text-xl font-semibold mb-4 mt-8">Video Tutorial</h3>
      <p class="mb-4 text-muted-foreground">Watch our official guide below for a visual walkthrough on changing your password:</p>
      <div class="relative w-full aspect-video rounded-xl overflow-hidden my-8 shadow-lg border border-border/50">
        <iframe 
          src="https://www.youtube.com/embed/0YtfIjOx9CE?si=d3M2VvB1zJc4W_0F" 
          title="Simple Way To Change Windows RDP Password" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
          class="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    `,
    category: "server-management",
    coverImage: {
      src: "https://img.youtube.com/vi/0YtfIjOx9CE/maxresdefault.jpg",
      alt: "Simple Way To Change Windows RDP Password Thumbnail",
    },
    author: {
      name: "CloudNode RDP Support",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    tags: ["Security", "Password", "Management", "Change RDP Password"],
    readingTimeMinutes: 2,
    publishedAt: "2024-03-02T10:00:00Z",
    updatedAt: "2024-03-02T10:00:00Z",
    seo: {
      metaTitle: "Change Server Password | CloudNode RDP KB",
      metaDescription:
        "Step-by-step instructions for changing your Windows Administrator password.",
    },
  },
  {
    id: "kb-3",
    slug: "understanding-your-billing-cycle",
    title: "Understanding Your Billing Cycle and Invoices",
    excerpt: "Find out when and how you are billed for your CloudNode RDP services.",
    content: `
      <h2 class="text-2xl font-semibold mb-4 mt-8">Billing Cycles</h2>
      <p class="mb-4 text-muted-foreground">At CloudNode RDP, all services are strictly prepaid. We offer monthly, quarterly, semi-annual, and annual billing cycles. You can choose this during checkout or upgrade later.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-8">Invoices</h3>
      <p class="mb-4 text-muted-foreground">An invoice will be automatically generated 7 days before your due date. You will receive an email notification when it is ready. If payment is not received by the due date, your server may face suspension.</p>
    `,
    category: "billing",
    coverImage: {
      src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=3270&auto=format&fit=crop",
      alt: "Billing covers image",
    },
    author: {
      name: "CloudNode RDP Billing",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    tags: ["Billing", "Invoices", "Payments"],
    readingTimeMinutes: 2,
    publishedAt: "2024-03-03T10:00:00Z",
    updatedAt: "2024-03-03T10:00:00Z",
    seo: {
      metaTitle: "Billing Cycle Info | CloudNode RDP KB",
      metaDescription:
        "Understand your CloudNode RDP billing cycle, invoices, and payment policies.",
    },
  },
  {
    id: "kb-4",
    slug: "how-to-install-chrome",
    title: "How to Install Google Chrome on Windows Server",
    excerpt:
      "The quick way to download and install Google Chrome using Internet Explorer or Edge.",
    content: `
      <h2 class="text-2xl font-semibold mb-4 mt-8">Installing Chrome</h2>
      <p class="mb-4 text-muted-foreground">Windows Server comes with strict Internet Security limits by default, making downloading browsers tricky. Here is how to bypass that to install Chrome.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-8">PowerShell Method (Recommended)</h3>
      <ol class="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
        <li>Open PowerShell as Administrator.</li>
        <li>Paste the following command and hit Enter:</li>
      </ol>
      <pre class="bg-muted/50 rounded-lg p-4 font-mono text-sm border my-6 overflow-x-auto text-foreground/80"><code>$Path = $env:TEMP + "\chrome_installer.exe"; Invoke-WebRequest "http://dl.google.com/chrome/install/375.126/chrome_installer.exe" -OutFile $Path; Start-Process -FilePath $Path -Args "/silent /install" -Verb RunAs -Wait; Remove-Item $Path</code></pre>
      <p class="mb-4 text-muted-foreground">Chrome will now be installed silently in the background. Check your desktop or start menu in a few seconds!</p>
    `,
    category: "software",
    coverImage: {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop",
      alt: "Software cover image",
    },
    author: {
      name: "CloudNode RDP Support",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    tags: ["Software", "Chrome", "Browser"],
    readingTimeMinutes: 4,
    publishedAt: "2024-03-04T10:00:00Z",
    updatedAt: "2024-03-04T10:00:00Z",
    seo: {
      metaTitle: "Install Chrome on VPS | CloudNode RDP KB",
      metaDescription:
        "Learn how to install Google Chrome on your Windows VPS or Dedicated Server easily.",
    },
  },
  {
    id: "kb-4-sound",
    slug: "simple-way-to-enable-sound-in-windows-rdp",
    title: "Simple Way To Enable Sound in Windows RDP",
    excerpt:
      "Learn how to quickly enable audio playback and fix missing sound issues on your remote desktop server.",
    content: `
      <h2 class="text-2xl font-semibold mb-4 mt-8">Fixing No Sound on RDP</h2>
      <p class="mb-4 text-muted-foreground">By default, Windows Server editions (like 2012, 2016, 2019, and 2022) have the <strong>Windows Audio</strong> service disabled to save resources. If you see a red 'X' over your speaker icon, here is how to fix it.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-8">Step-by-Step Guide</h3>
      <ol class="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
        <li>Log into your CloudNode RDP server.</li>
        <li>Press the <strong>Windows Key + R</strong> to open the Run dialog.</li>
        <li>Type <code>services.msc</code> and press Enter.</li>
        <li>Scroll down the list until you find the service named <strong>Windows Audio</strong>.</li>
        <li>Right-click on <strong>Windows Audio</strong> and go to <strong>Properties</strong>.</li>
        <li>Change the <strong>Startup type</strong> from <em>Disabled</em> or <em>Manual</em> to <strong>Automatic</strong>.</li>
        <li>Click <strong>Apply</strong>, then click the <strong>Start</strong> button to run the service immediately.</li>
        <li>Click <strong>OK</strong>. You should hear a chime and the red 'X' over the speaker icon in the taskbar will disappear!</li>
      </ol>
      
      <p class="mb-4 text-muted-foreground">Ensure your local Remote Desktop Connection client is also set to bring audio to your local computer (Local Resources > Remote audio Settings).</p>

      <h3 class="text-xl font-semibold mb-4 mt-8">Video Tutorial</h3>
      <p class="mb-4 text-muted-foreground">Watch the visual guide below to see exactly how it's done:</p>
      <div class="relative w-full aspect-video rounded-xl overflow-hidden my-8 shadow-lg border border-border/50">
        <iframe 
          src="https://www.youtube.com/embed/xdua8LKV5Rk?si=1m2D9S3B6CDEJcT" 
          title="Simple Way To Sound Enabled in windows RDP" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
          class="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    `,
    category: "software",
    coverImage: {
      src: "https://img.youtube.com/vi/xdua8LKV5Rk/maxresdefault.jpg",
      alt: "Simple Way To Sound Enabled in windows RDP Thumbnail",
    },
    author: {
      name: "CloudNode RDP Support",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    tags: ["Audio", "Sound", "Settings", "Troubleshooting"],
    readingTimeMinutes: 3,
    publishedAt: "2024-03-04T12:00:00Z",
    updatedAt: "2024-03-04T12:00:00Z",
    seo: {
      metaTitle: "Enable Sound on Windows RDP | CloudNode RDP",
      metaDescription:
        "Step-by-step instructions and video tutorial on how to enable the Windows Audio service on your Windows Server.",
    },
  },
  {
    id: "kb-5",
    slug: "rdp-connection-failed-troubleshooting",
    title: "Troubleshooting: RDP Connection Failed",
    excerpt:
      "What to do when you get an 'An Internal Error Has Occurred' or cannot reach the server.",
    content: `
      <h2 class="text-2xl font-semibold mb-4 mt-8">Connection Issues</h2>
      <p class="mb-4 text-muted-foreground">If you cannot connect to your RDP, don't panic. Many issues can be resolved with a few simple steps.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-8">Common Causes and Fixes</h3>
      <ul class="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
        <li><strong>Server is Offline/Rebooting:</strong> Give the server 5 minutes if it was recently restarted. It can take time for Windows to fully boot.</li>
        <li><strong>Firewall Block:</strong> Ensure your local network allows outbound connections on port 3389. Try connecting from a different network (like a mobile hotspot) to test.</li>
        <li><strong>Resource Usage:</strong> If your server is at 100% CPU or RAM, it may drop RDP connections. You can try a hard reboot from the CloudNode RDP client area.</li>
      </ul>
      <p class="mb-4 text-muted-foreground">If you still cannot connect, please open a support ticket from your dashboard and our team will investigate.</p>
    `,
    category: "troubleshooting",
    coverImage: {
      src: "https://plus.unsplash.com/premium_photo-1683134447642-b97f09e7924d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Troubleshooting cover image",
    },
    author: {
      name: "CloudNode RDP Support",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    tags: ["Troubleshooting", "Connection", "Errors"],
    readingTimeMinutes: 5,
    publishedAt: "2024-03-05T10:00:00Z",
    updatedAt: "2024-03-05T10:00:00Z",
    seo: {
      metaTitle: "RDP Connection Issues | CloudNode RDP KB",
      metaDescription:
        "Steps to diagnose and fix common Remote Desktop connection failures.",
    },
  },
  {
    id: "kb-6",
    slug: "acceptable-use-policy-overview",
    title: "Overview of our Acceptable Use Policy (AUP)",
    excerpt: "A quick summary of what is and isn't allowed on CloudNode RDP servers.",
    content: `
      <h2 class="text-2xl font-semibold mb-4 mt-8">Acceptable Use Policy</h2>
      <p class="mb-4 text-muted-foreground">To ensure stability and legal compliance, we have strict rules regarding server usage. Violation of these rules results in immediate termination without refund.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-8">Strictly Prohibited</h3>
      <ul class="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
        <li>Hosting phishing sites or malware.</li>
        <li>Port scanning, DDoS attacks, or hacking activities.</li>
        <li>Sending spam emails or running unauthorized mail gateways.</li>
        <li>Mining cryptocurrencies on shared resources (VPS). Dedicated server mining is allowed but may void SLAs.</li>
      </ul>
      <p class="mb-4 text-muted-foreground">For a full read, please visit our <a href="/aup" class="text-primary hover:underline">Acceptable Use Policy</a> documentation page.</p>
    `,
    category: "policies",
    coverImage: {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop",
      alt: "Policies cover image",
    },
    author: {
      name: "CloudNode RDP Legal",
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    tags: ["Policies", "AUP", "Terms"],
    readingTimeMinutes: 3,
    publishedAt: "2024-03-06T10:00:00Z",
    updatedAt: "2024-03-06T10:00:00Z",
    seo: {
      metaTitle: "Acceptable Use Policy Summary | CloudNode RDP KB",
      metaDescription:
        "A quick overview of prohibited activities on our servers.",
    },
  },
];

export const POPULAR_KB = [
  {
    id: "a1",
    label: "Connect from Mac",
    slug: "connect-from-mac",
  },
  {
    id: "a2",
    label: "Change RDP Password",
    slug: "change-rdp-password",
  },
  {
    id: "a3",
    label: "Billing",
    slug: "billing",
  },
];
