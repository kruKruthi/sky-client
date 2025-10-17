import React from "react";
import type { NavItem as NavItemType } from "./types";
import NavItem from "./NavItem";
 
export const navItems: NavItemType[] = [
  {
    label: "Watch",
    href: "/watch",
    submenu: [
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
    submenu: [
      { label: "Stream", href: "/tv/stream" },
      { label: 'Glass', href: "/tv/glass" },
      { label: 'SkyQ', href: "/tv/skyq" },
      { label: 'TV & Broadband', href: "/tv/tv-and-broadband" },
    ] 
  },
  {
    label: "Glass",
    href: "/glass",
    submenu: [
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
    submenu: [
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
    submenu: [
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

const NavBar: React.FC <Props>= ({ openItem, onItemChange }) => {
  const handleOpenItemChange = (item: NavItemType | null) => {
    onItemChange(item)
  };

  return (
    <nav className="hidden lg:flex space-x-3 items-center">
      {navItems.map((item) => (
        <NavItem key={item.label} item={item} openItem={openItem} onItemChange={handleOpenItemChange} />
      ))}
    </nav>
  );
};
 
export default NavBar;
