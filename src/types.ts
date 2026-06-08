export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  priceRange: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  brandName: string;
  bgColor: string;
  textColor: string;
  mockupBg: string; // Background color inside the simulated browser window
  themeColor: string; // Colour accent of project site
  mockupType: "lifestyle" | "magazine" | "minimalist" | "editorial";
}
