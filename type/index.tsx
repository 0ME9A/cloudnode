import type { IconType } from "react-icons";
import type { ReactNode } from "react";

export type TLink = {
  id?: string;
  href: string;
  label: string;
  external?: boolean;
  highlight?: boolean;
  orderSwitch?: boolean;
  icon?: {
    customIcon?: IconType;
    showIcon?: boolean;
    className?: string;
  };
};

export type TNavMenu = {
  id: string;
  href: string;
  label: string;
  icon?: IconType;
  subLinks?: TLink[];
};

export type TFooterLink = {
  id: string;
  title: string;
  links: TLink[];
};

// company data

export type TEmailPrimary = string;

export type TPhonePrimary = {
  code: string;
  number: string;
};

export type TEmailConfig = {
  primary: TEmailPrimary;
  [key: string]: string; // support, pitches, etc.
};

export type TPhoneConfig = {
  primary: TPhonePrimary;
  [key: string]: TPhonePrimary; // support, sales, etc.
};

export type TAddress = {
  building: string;
  near: string;
  pinCode: string;
  city: string;
  state: string;
  country: string;
  fullAddress: string;
  googleMap?: string;
};

export type TCompanyInfo = {
  name: string;
  fullName: string;
  website: string;
  slogan?: string;
  about: string;
  address: {
    headOffice: TAddress;
  };
  phone: {
    primary: {
      code: string;
      number: string;
    };
  };
  email: TEmailConfig;
  officeTime: {
    days: {
      from: string;
      to: string;
      closed: string[];
    };
    hours: {
      from: string;
      to: string;
    };
  };
  fcra: string;
  cin: string;
  ngoId: string;
  registered: string;
  copyRights: string;
};

export type TContactInfoCard = {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  value: string;
  href?: string;
  isAddress?: boolean;
};

export type TTag = {
  label: string;
  color: string;
};

export type TWrapper = {
  l: string;
  r: string;
};

export type TImg = {
  src: string;
  alt: string;
  className?: string;
};

export type SMINames =
  | "twitter"
  | "linkedin"
  | "instagram"
  | "facebook"
  | "youtube"
  | "whatsapp"
  | "crunchbase";

// country code
export type CountryCodeInt = {
  country: string;
  code: string;
  iso: string;
};

// faqs
export type TFaq = {
  id: string;
  question: string;
  answer: string;
};

export type TFaqCategory = {
  id: string;
  category: string;
  faqs: TFaq[];
};

// team
export type TMember = {
  id: string;
  img: TImg;
  name: string;
  role: string;
  about: string;
  location?: string;
  team: string;
  follow: TLink[];
};

export type TTeams = {
  id: string;
  heading: string;
  members: TMember[];
};

// impact stats
export type TImpactStats = {
  id: string;
  value: number;
  wrapper: {
    l: string;
    r: string;
  };
  label: string;
  icon: IconType;
  desc?: string;
  animate?: boolean;
};

// tailwindCss breakpoint
export type TBreakpointName = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface TBreakpointInfo {
  name: TBreakpointName;
  width: number;
}

// blog
export type TBlogMeta = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: {
    src: string;
    alt: string;
  };
  category: {
    id: string;
    label: string;
  };
  stage?: {
    id: string;
    label: string;
  };
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  editorial: {
    featured: boolean;
    editorPick: boolean;
  };
  status: "published" | "draft";
  readingTimeMinutes: number;
  publishedAt: string;
  updatedAt: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
};

export type TMockBlog = {
  id: string;
  attributes: {
    title: string;
    slug: string;
    content: string;
    stage?: string;
    readingTimeMinutes: number;
    status: string;
    featuredImage: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
    author: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    tags: string[];
    type: string;
    publishedAt: string;
  };
};

export type TContributor = {
  name: string;
  role?: string;
};

export type TPostAttributes = {
  title: string;
  slug: string;
  content: string;
  stage: string;
  readingTimeMinutes: number;
  status: string;
  featuredImage: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
  author: {
    data: {
      attributes: {
        name: string;
      };
    };
  };
  tags: string[];
  type: string;
  publishedAt: string;
};

// insights reports
export type TResearchMeta = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  coverImage: {
    src: string;
    alt: string;
  };
  category: {
    id: string;
    label: string;
  };
  stage?: {
    id: string;
    label: string;
  };
  format:
    | "market-insights"
    | "sectors-insights"
    | "stages-insights"
    | "founder-brief";
  length: {
    pages: number;
  };
  contributors: TContributor[];
  tags: string[];
  featured?: boolean;
  status: "published" | "draft";
  publishedAt: string;
  updatedAt: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
};

export type TKBCatogary = {
  id: string;
  title: string;
  desc: string;
  route: string;
  articleCount: number;
  coverImage: TImg;
};

export type TKBArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: {
    src: string;
    alt: string;
  };
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  readingTimeMinutes: number;
  publishedAt: string;
  updatedAt: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
};

// export type TMockResearch = {
//   id: string;
//   attributes: {
//     title: string;
//     slug: string;
//     content: string;
//     format:
//       | "market-report"
//       | "sector-deep-dive"
//       | "technical-insight"
//       | "founder-brief";
//     category: {
//       id: string;
//       label: string;
//     };
//     tags: string[];
//     stage: "pre-seed" | "seed" | "series-a" | "all-stages";
//     length: {
//       pages: number;
//     };
//     contributors: {
//       name: string;
//       role?: string;
//     }[];
//     featured: boolean;
//     status: "draft" | "published";
//     featuredImage: {
//       data: {
//         attributes: {
//           url: string;
//           alternativeText: string;
//         };
//       };
//     };
//     download?: {
//       url: string;
//       label: string;
//       fileType: "pdf";
//       sizeMB?: number;
//     };
//     publishedAt: string;
//     updatedAt: string;
//   };
// };

// company portfolio
export type TCompanyPortfolioMeta = {
  id: string;
  name: string;
  desc: string;
  sector: {
    id: string;
    label: string;
  };
  stage: {
    id: string;
    label: string;
  };
  fundingAmount: number;
  fundingDisplay: string;
  isFollowOn: boolean;
  website: string;
  logo: TImg;
};

export type TPortfolioList = {
  id: string;
  label: string;
  portfolio: TCompanyPortfolioMeta[];
};

// header
export type TSectionHeader = {
  label?: string;
  title: ReactNode;
  desc?: ReactNode;
  align?: "l" | "r" | "c";
  id?: string;
  cta?: TLink[];
  className?: string;
  /** When true, apply GSAP scroll-reveal animation (homepage only) */
  animate?: boolean;
};

export type TPageHeader = TSectionHeader & {
  ctaLinks?: TLink[];
  subTitle?: ReactNode;
  children?: ReactNode;
};

// investment stage
export type TSector = {
  id: string;
  title: string;
  desc: string;
  img: {
    src: string;
    alt: string;
  };
  focusAreas: string[];
  thesis: string;
};

export type TStage = {
  id: string;
  label: string;
  tagline: string;
  icon: IconType;
  investmentRange: {
    min: number;
    max: number;
    display: string;
  };
  focusAreas: string[];
  thesis: string;
};

export type TWhatWePublish = {
  id: string;
  title: string;
  desc: string;
  icon: IconType;
  highlights?: string[];
  link: TLink;
};

export type TApproach = {
  id: string;
  title: string;
  desc: string;
  highlights?: string[];
  closing?: string;
  icon: IconType;
};

// research
export type TResearchPillar = {
  id: string;
  title: string;
  desc: string;
  highlights?: string[];
  action: TLink;
};

// pricing plans
export type TPricingPlan = {
  name: string;
  ram: string;
  cpu: string;
  storage: string;
  speed: string;
  price: string;
  popular?: boolean;
  perks: string[];
  href: string;
};

// feature items
export type TFeatureItem = {
  icon: IconType;
  title: string;
  description: string;
  highlight: string;
};

export type TLocationItem = {
  city: string;
  country: string;
  flag: string;
  ping: string;
  available: boolean;
  coordinates: [number, number];
};

// checkout state
export type TBillingCycle =
  | "monthly"
  | "quarterly"
  | "semi-annually"
  | "annually";
export type TOperatingSystem =
  | "windows-2016"
  | "windows-2019"
  | "windows-2022"
  | "windows-2025";
export type TPaymentMethod = "razorpay" | "paypal" | "crypto" | "perfect-money";

export interface ICheckoutState {
  planId: string | null;
  billingCycle: TBillingCycle;
  os: TOperatingSystem;
  additionalIps: number;
  paymentMethod: TPaymentMethod | null;
  location: string | null;
  couponCode: string | null;
}
