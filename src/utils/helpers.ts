import { DotcmsNavigationItem } from "types";

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const homeNavItem: DotcmsNavigationItem = {
  title: "Home",
  href: "/",
  hash: 1,
  folder: "",
  host: "",
  languageId: 0,
  type: "",
  target: "",
  order: 0,
};
