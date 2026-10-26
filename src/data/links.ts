export type LinkId = "website" | "facebook" | "linkedin" | "instagram" | "tiktok";

export type CompanyLink = {
  id: LinkId;
  label: string;
  handle: string;
  href: string;
};

export const websiteLink: CompanyLink = {
  id: "website",
  label: "Visit our website",
  handle: "tunav.com",
  href: "https://tunav.com"
};

export const socialLinks: CompanyLink[] = [
{
  id: "facebook",
  label: "Facebook",
  handle: "@tunavgps",
  href: "https://www.facebook.com/tunavgps"
},
{
  id: "linkedin",
  label: "LinkedIn",
  handle: "company/tunav",
  href: "https://tn.linkedin.com/company/tunav"
},
{
  id: "instagram",
  label: "Instagram",
  handle: "@tunav_it_group",
  href: "https://instagram.com/tunav_it_group/"
},
{
  id: "tiktok",
  label: "TikTok",
  handle: "@tunav_it_group",
  href: "https://www.tiktok.com/@tunav_it_group"
}];


export const contactDetails = {
  email: "contact@tunav.com",
  phone: "+216 71 807 667",
  phoneHref: "tel:+21671807667",
  agentPhone: "+216 95 992 452",
  agentPhoneHref: "tel:+21695992452"
};