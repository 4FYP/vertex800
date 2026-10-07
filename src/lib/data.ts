import site from "@/data/site.json";

export type Service = (typeof site.services)[number];
export type Industry = (typeof site.industries)[number];
export type Alliance = (typeof site.alliances)[number];
export type Insight = (typeof site.insights)[number];

export const data = site;

export function getService(slug: string): Service | undefined {
  return site.services.find((s) => s.slug === slug);
}

export function serviceHref(slug: string) {
  return `/services/${slug}`;
}

export function normalizeHref(href: string) {
  if (href.startsWith("/services/")) {
    const slug = href.replace(/\/+$/, "").split("/").pop();
    return `/services/${slug}`;
  }
  return href
    .replace(/\.php$/, "")
    .replace(/\/index$/, "/")
    .replace(/\/$/, "") || "/";
}

export const galleryImages = [
  "AI.png",
  "IT.jpg",
  "D.jpg",
  "Cloud.jpg",
  "Cloud1.jpg",
  "WebDevelopment.png",
  "MobileDevelopment.png",
  "Mob-Web.jpg",
  "Staff.png",
  "Business_Intelligence.png",
  "MSP-Services.png",
] as const;

const offeringImageMap: Record<string, string> = {
  "AI & Engineering": "AI.png",
  Cyber: "IT.jpg",
  Customer: "D.jpg",
  "Enterprise Performance": "Cloud.jpg",
  "Strategy & Transactions": "Business_Intelligence.png",
  "Finance Transformation": "Cloud1.jpg",
  "Human Capital": "Staff.png",
  Operate: "MSP-Services.png",
};

const serviceImageMap: Record<string, string> = {
  "ai-engineering": "AI.png",
  cyber: "IT.jpg",
  customer: "D.jpg",
  "enterprise-performance": "Cloud.jpg",
  operate: "MSP-Services.png",
  "business-process-solutions": "MSP-Services.png",
  "human-capital": "Staff.png",
  "global-employer-services": "Staff.png",
  finance: "Business_Intelligence.png",
  "strategy-transactions": "Business_Intelligence.png",
  "tax-transformation": "Business_Intelligence.png",
  "direct-tax": "Business_Intelligence.png",
  "indirect-tax": "Business_Intelligence.png",
  "blockchain-digital-assets": "AI.png",
  sustainability: "Cloud1.jpg",
  "vertex-private": "Staff.png",
};

export function imgPath(file: string) {
  // Keep paths filesystem-safe for next/image (no spaces left in assets).
  return `/images/${file}`;
}

export function offeringImage(title: string) {
  return offeringImageMap[title] ?? "IT.jpg";
}

export function serviceImage(slug: string) {
  if (serviceImageMap[slug]) return serviceImageMap[slug];
  const i = Math.abs(hash(slug)) % galleryImages.length;
  return galleryImages[i];
}

export function industryImage(index: number) {
  return galleryImages[index % galleryImages.length];
}

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return h;
}

export const featuredFooterSlugs = [
  "ai-engineering",
  "cyber",
  "customer",
  "audit",
  "direct-tax",
  "strategy-transactions",
  "operate",
  "human-capital",
] as const;

export const projectTypes = [
  "AI & Engineering",
  "Cyber",
  "Customer / Digital",
  "Audit & Assurance",
  "Tax",
  "Strategy & Transactions",
  "Finance Transformation",
  "Human Capital",
  "Enterprise Performance",
  "Operate / Managed Services",
  "Other",
] as const;
