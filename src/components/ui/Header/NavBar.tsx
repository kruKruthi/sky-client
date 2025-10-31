import React from "react";
import type { NavItem as NavItemType } from "./types";
import NavItem from "./NavItem";
import { useHeaderMenus } from "../../../graphql/hooks";

 
export const navItems: NavItemType[] = [
  {
    label: "Watch",
    href: "/watch",
    submenus: [
      { label: "Cinema", href: "/watch/cinema" },
      { label: 'Sports', href: "/watch/sports" },
      { label: 'Kids', href: "/watch/kids" },
      { label: 'Discovery+', href: "/watch/discovery" },
      { label: "What to watch", href: "/watch/what-to-watch" }
    ],
  },
  { 
    label: "TV", 
    href: "/tv", 
    submenus: [
      { label: "Stream", href: "/tv/stream" },
      { label: 'Glass', href: "/tv/glass" },
      { label: 'SkyQ', href: "/tv/skyq" },
      { label: 'TV & Broadband', href: "/tv/tv-and-broadband" },
    ] 
  },
  {
    label: "Glass",
    href: "/glass",
    submenus: [
      { label: "Glass Gen 2", href: "/glass/gen-2" },
      { label: "Glass Air", href: "/glass/air" },
      { label: "New", href: "/glass/new" },
      { label: "Tech specs", href: "/glass/tech-specs" },
      { label: "Switching to Sky Glass", href: "/glass/switching" },
    ],
  },
  {
    label: "Broadband",
    href: "/broadband",
    submenus: [
      {  label: "Broadband", href: "/broadband" },
      { label: "TV & Broadband", href: "/tv/tv-and-broadband" },
      { label: "Full Fibre Broadband", href: "/broadband/full-fibre" },
      { label: 'Broadband for Gaming', href: "/broadband/for-gaming" },
      { label: 'Broadband for Business', href: "/broadband/for-business" },
    ],
  },
  {
    label: "Mobile",
    href: "/mobile",
    submenus: [
      { label: "Sky Mobile", href: "/mobile/sky-mobile" },
      { label: "Phones", href: "/mobile/phones" },
      { label: "SIM", href: "/mobile/sim" },
      { label: "Tablets & Laptops", href: "/mobile/tablets-and-laptops" },
      { label: "Brands", href: "/mobile/brands" },
      { label: "Accessories", href: "/mobile/accessories" },
      { label: "SIM Activation", href: "/mobile/sim-activation" },
      { label: "Manage", href: "/mobile/manage" },
    ],
  },
  { label: "Protect", href: "/protect" },
  { label: "Business", href: "/business" },
  { label: "Deals", href: "/deals" },
];

interface Props {
  openItem: NavItemType | null;
  onItemChange: (item: NavItemType | null) => void;
}

const NavBar: React.FC<Props> = ({ openItem, onItemChange }) => {
  // Call hook inside the component (hooks must not be used at top-level).
  const { headerMenus } = useHeaderMenus();

  const handleOpenItemChange = (item: NavItemType | null) => {
    onItemChange(item);
  };

  // Use headerMenus when available, otherwise fall back to the static navItems.
  // Cast to the expected NavItemType[] to satisfy TypeScript (headerMenus may come from GraphQL types).
  const menus: NavItemType[] = (headerMenus as unknown as NavItemType[]) ?? navItems;
  console.log("NavBar menus:", menus);
  return (
    <nav className="hidden lg:flex space-x-3 items-center">
      {menus.map((data) => (
        <NavItem key={data.label} item={data} openItem={openItem} onItemChange={handleOpenItemChange} />
      ))}
    </nav>
  );
};
 
export default NavBar;
