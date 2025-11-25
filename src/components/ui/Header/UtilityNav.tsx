import React, { useState, useRef, useEffect } from "react";
import { Search, Bell, ChevronDown, ChevronUp } from "lucide-react";
import type { NavItem } from "./types";
import SearchContent from "./SearchContent";
import NotificationAlert from "./NotificationAlert";
import './NotificationAlert.css';
 
interface Props {
  openItem: NavItem | null;
  onItemChange: (item: NavItem | null) => void;
}

const utilityNavItems: NavItem[] = [
  {
    label: "Help",
    submenuContainerClassName: 'justify-end',
    submenus: [
      { label: "Help", href: "/help" },
      { label: "My Account", href: "/help/my-account" },
      { label: "Broadband", href: "/help/broadband" },
      { label: "TV", href: "/help/tv" },
      { label: "Mobile", href: "/help/mobile" },
      { label: "Talk", href: "/help/talk" },
      { label: "VIP", href: "/help/vip" },
      { label: "Sky Customer Forum", href: "/help/sky-customer-forum" },
    ]
  },
  {
    label: 'Search',
    submenuContainerClassName: 'h-18 !bg-gray-100 justify-center',
  }
];

const UtilityNav: React.FC<Props> = ({ openItem, onItemChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

   // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleBellClick = () => {
    setIsOpen(prev => !prev);
  };

  // Handle search click
  const handleSearchClick = () => {
    if(openItem?.label === utilityNavItems[1].label) {
      onItemChange(null);
    } else {
      onItemChange({
        label: utilityNavItems[1].label,
        submenuContainerClassName: utilityNavItems[1].submenuContainerClassName,
        subMenuContent: <SearchContent onClose={() => onItemChange(null)} />,
      });
    }
  }
  return (
    <div className="flex items-center space-x-4">
      {/* Desktop utility nav */}
      <div className="hidden xl:flex items-center space-x-4">
        <button className="p-2 rounded-full outline-none cursor-pointer hover:bg-gray-100 focus:outline-none" onClick={handleSearchClick}>
          <Search className="w-5 h-5 text-gray-800"/>
        </button>
        <div>
          <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
            <Bell className="w-5 h-5 text-gray-800" onClick={handleBellClick}/>
          </button>
          {isOpen && (
            <div className="popup-container" ref={popupRef}>
              <NotificationAlert
                message="You're up to date"
                subMessage="No new alerts"
              />
            </div>
          )}
        </div>
        <button className="flex items-center text-gray-800 hover:text-skyBlue px-2 py-2 rounded-md">
          <span className="text-sm font-medium">Help</span>
          {
            openItem?.label === utilityNavItems[0].label ? 
            <ChevronUp className="ml-1 w-4 h-4 cursor-pointer" onClick={() => onItemChange(null)} /> :
              <ChevronDown className="ml-1 w-4 h-4 cursor-pointer" onClick={() => onItemChange({
                label: utilityNavItems[0].label,
                href: utilityNavItems[0].href,
                submenuContainerClassName: utilityNavItems[0].submenuContainerClassName,
                submenus: utilityNavItems[0].submenus
              })}/>
          }
        </button>
        <a
          href="/signin"
          className="flex items-center text-sm text-gray-800 hover:text-skyBlue px-2 py-2 rounded-md"
        >
          Sign in
        </a>
      </div>
    </div>
  );
};
 
export default UtilityNav;
