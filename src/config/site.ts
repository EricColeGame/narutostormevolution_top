export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Naruto Storm Evolution Wiki",
  shortName: "Naruto Storm Evolution",
  logoText: "N",
  tagline: "Guides, Characters, Abilities & Combat Mechanics",
  description: "Explore the Naruto Storm Evolution Wiki for character guides, combat tips, abilities, updates and gameplay information for ninja battle fans.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://narutostormevolution.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://narutostormevolution.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://unsevolution.com/",
  heroVideoId: "m7OutTJba5s", // Naruto Storm Evolution 1.11 official trailer reveal (showcase)
  social: {
    discord: "https://discord.gg/ultimateninja",
    twitter: "https://twitter.com/UNSEvolution",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
