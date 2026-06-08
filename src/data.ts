import { ServiceItem, PortfolioProject } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "service-1",
    number: "01",
    name: "Interactive Brand Systems",
    priceRange: "₦12M+ / $15K — $25K"
  },
  {
    id: "service-2",
    number: "02",
    name: "Premium Web Architecture",
    priceRange: "₦18M+ / $20K — $45K"
  },
  {
    id: "service-3",
    number: "03",
    name: "Digital flagship experiences",
    priceRange: "₦25M+ / $30K — $75K"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "project-1",
    title: "NOIR MONDE",
    category: "Haute couture & digital atelier",
    brandName: "Noir Monde",
    bgColor: "#EADECC", // Warm soft sand
    textColor: "#1A1614",
    mockupBg: "#111111", // Dark couture site
    themeColor: "#5C1A1A",
    mockupType: "lifestyle"
  },
  {
    id: "project-2",
    title: "SŌSEKI STUDIO",
    category: "Architectural Culinary Arts",
    brandName: "Sōseki",
    bgColor: "#E3DFD5", // Warm stone
    textColor: "#1A1614",
    mockupBg: "#FFFFFF",
    themeColor: "#2F3E34", // Dark green/pine
    mockupType: "editorial"
  },
  {
    id: "project-3",
    title: "ORE SKINCARE",
    category: "Botanical Apothecary flagship",
    brandName: "Ore",
    bgColor: "#EAE3D5", // Soft cream clay
    textColor: "#1A1614",
    mockupBg: "#F7F5F0",
    themeColor: "#8C6B5E", // Terracotta
    mockupType: "minimalist"
  },
  {
    id: "project-4",
    title: "AETHER FORMS",
    category: "Collectible Brutalist Furniture",
    brandName: "Aether",
    bgColor: "#DFD8CD", // Warm grey paper
    textColor: "#1A1614",
    mockupBg: "#161514",
    themeColor: "#5C1A1A",
    mockupType: "magazine"
  }
];
