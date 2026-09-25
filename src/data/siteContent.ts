import {
  Code2,
  Globe2,
  LineChart,
  Palette,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { companyInfo } from "../config/company";

export interface NavLinkItem {
  label: string;
  href: string;
}

export const navLinks: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export interface ProblemCategory {
  title: string;
  tone: "purple" | "indigo";
  items: string[];
}

export const problems: ProblemCategory[] = [
  {
    title: "Operational",
    tone: "purple",
    items: [
      "Manual and repetitive processes",
      "Disconnected software systems",
      "No centralised business data",
      "Poor workflow visibility",
      "Limited reporting and analytics",
    ],
  },
  {
    title: "Customer Experience",
    tone: "purple",
    items: [
      "Outdated websites and poor mobile experiences",
      "Slow digital services",
      "Complicated customer journeys",
      "Low conversion rates",
      "Limited self-service capabilities",
    ],
  },
  {
    title: "Growth",
    tone: "indigo",
    items: [
      "Software that cannot scale",
      "Legacy systems limiting innovation",
      "Lack of automation",
      "Difficult third-party integrations",
      "Rising operational costs",
    ],
  },
];

export interface ServiceItem {
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
}

export const services: ServiceItem[] = [
  {
    title: "Software Engineering",
    description:
      "Custom software designed around each business's unique processes, not around a template.",
    detail:
      "Business management systems · ERP · CRM · Internal platforms · SaaS applications · Custom dashboards · API development",
    icon: Code2,
  },
  {
    title: "AI Solutions",
    description:
      "Helping organisations use AI where it improves productivity, decisions and engagement — and saying so when it wouldn't.",
    detail:
      "AI assistants & chatbots · Document processing · Business intelligence · LLM integration · AI-powered internal tools",
    icon: Zap,
  },
  {
    title: "Business Automation",
    description:
      "Automating repetitive work so your team can spend its time on the things that actually need a person.",
    detail:
      "Workflow automation · CRM & HR automation · Finance process automation · Approval workflows · Notification systems",
    icon: RefreshCw,
  },
  {
    title: "Web Development",
    description:
      "Modern web platforms combining performance, usability and scalability.",
    detail:
      "Corporate websites · Customer portals · Web applications · CMS solutions · Progressive web apps",
    icon: Globe2,
  },
  {
    title: "Mobile Applications",
    description:
      "Applications built for performance, usability and long-term maintainability.",
    detail:
      "Android · iOS · Cross-platform · Customer apps · Internal business apps",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "Digital experiences that are intuitive, accessible and aligned with business goals.",
    detail:
      "User research · UX strategy · Interface design · Wireframing · Interactive prototypes · Design systems",
    icon: Palette,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Commerce platforms built to improve the buying experience and grow online sales.",
    detail:
      "Custom e-commerce · Shopify & WooCommerce · Inventory & payment integration · Order management · Marketplaces",
    icon: ShoppingCart,
  },
  {
    title: "Support & Continuous Improvement",
    description:
      "Keeping systems reliable and evolving after launch — the part most vendors treat as an afterthought.",
    detail:
      "Performance monitoring · Bug resolution · Security updates · Infrastructure maintenance · Feature enhancements",
    icon: ShieldCheck,
  },
  {
    title: "Digital Marketing",
    description:
      "Measurable strategies that support growth, usually alongside a platform we've already built for you.",
    detail:
      "SEO · Social media marketing · Google & Meta ads · Content strategy · Conversion optimisation",
    icon: LineChart,
  },
];

export const stages: string[] = [
  "Discovery",
  "Solution Strategy",
  "UI / UX Design",
  "Engineering",
  "Quality Assurance",
  "Deployment",
  "Continuous Support",
];

export const stats: [string, string, string][] = [
  [
    "26",
    "Projects Delivered",
    "Shipped by our founders across web, mobile, AI and cloud — before and since founding Zynx Dev.",
  ],
  [
    "9",
    "Years Combined Experience",
    "Engineering depth across modern web, mobile, AI and cloud technologies.",
  ],
  [
    "50",
    "Technologies",
    "We select the right tools for each project instead of forcing one stack on every problem.",
  ],
];

export const faqs: [string, string][] = [
  [
    "What does a custom build typically cost?",
    "Cost varies based on scope, technical complexity, integrations, and performance needs. Most custom platforms range from smaller scoped sprints ($3k-$8k) to comprehensive multi-module business systems ($15k-$50k+). We provide clear milestone-based pricing after the discovery phase.",
  ],
  [
    "Can we start with something smaller than a full build?",
    "Yes, absolutely. We often recommend starting with a high-fidelity prototype or a two-week Discovery Sprint to test assumptions, align stakeholders, and mitigate technical risks before committing to complete development.",
  ],
  [
    "Who owns the code and the intellectual property?",
    "You do. 100%. Upon completion and final payment, all intellectual property rights, repositories, credentials, and documentation are transferred fully to your organisation with zero vendor lock-in.",
  ],
  [
    "Who actually writes the code? Is any of it subcontracted?",
    "Our core team of dedicated engineers at Zynx Dev develops your software directly. We never blindly outsource or subcontract critical code to unknown third parties.",
  ],
  [
    "How long does a project take?",
    "Typical MVP projects take 6 to 10 weeks, while full enterprise web/mobile applications and workflow engines take 3 to 6 months delivered iteratively every two weeks.",
  ],
  [
    "What happens if we need to stop, or it goes wrong?",
    "Our contracts have modular sprint stages. You can stop or pause work at any stage checkpoint. You retain full ownership of whatever work, designs, and code was completed up to that point.",
  ],
  [
    "Will you sign an NDA?",
    "Yes, absolutely. We routinely sign non-disclosure agreements before reviewing proprietary business logic or product documentation.",
  ],
  [
    "What happens after launch?",
    "We offer comprehensive warranty periods alongside continuous support retainers for monitoring, bug fixes, server maintenance, security patches, and incremental feature updates.",
  ],
  [
    "Do you work with small businesses, or only larger companies?",
    "We work with ambitious founders, established SME businesses, as well as fast-growing mid-market companies needing high-reliability software.",
  ],
];

export const footerNavigationLinks: [string, string][] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Our Work", "/work"],
  ["Contact", "/contact"],
];

export const footerServicesLinks: [string, string][] = [
  ["Custom Software", "/services"],
  ["AI Solutions", "/services"],
  ["Business Automation", "/services"],
  ["Web & Mobile Apps", "/services"],
  ["UI/UX Design", "/services"],
];

export const footerSocialLinks: [string, string][] = [
  [companyInfo.facebook, "#"],
  [companyInfo.whatsapp, companyInfo.whatsappUrl],
  [companyInfo.linkedin, "#"],
  [companyInfo.instagram, "#"],
];
