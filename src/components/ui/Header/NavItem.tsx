import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { NavItem as NavItemType } from "./types";

interface Props {
  item: NavItemType;
  openItem: NavItemType | null;
  onItemChange: (item: NavItemType | null) => void;
}

const NavItem: React.FC<Props> = ({ item, openItem, onItemChange }) => {
  return (
    <div className="relative">
      <button
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-800 cursor-pointer"
      >
        <span>{item.label}</span>
        {item.submenu && (
          <>
            {openItem?.label === item.label ? (
              <ChevronUp
                data-testid="chevron-up"
                className="ml-2 w-4 h-4 cursor-pointer"
                onClick={() => onItemChange(null)}
              />
            ) : (
              <ChevronDown
                data-testid="chevron-down"
                className="ml-2 w-4 h-4 cursor-pointer"
                onClick={() => onItemChange(item)}
              />
            )}
          </>
        )}
      </button>
    </div>
  );
};

export default NavItem;
