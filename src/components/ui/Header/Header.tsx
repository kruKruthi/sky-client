import React, { useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import UtilityNav from "./UtilityNav";
import SubMenuPanel from "./SubMenuPanel";
import type { NavItem } from "./types";
 
const Header: React.FC = () => {
  const [openItem, setOpenItem] = useState<NavItem | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center xl:w-auto flex-1 justify-center xl:justify-start xl:ml-1">
          <Logo />
          <div className="hidden xl:flex ml-2">
            <NavBar openItem={openItem} onItemChange={setOpenItem} />
          </div>
          <div className="flex items-center xl:ml-auto">
            <UtilityNav
              openItem={openItem}
              onItemChange={setOpenItem}  
            />
          </div>
        </div>
      </div>
      {!!openItem && (
        <SubMenuPanel 
          menu={openItem.submenu ?? []} 
          containerClassName={openItem?.submenuContainerClassName} 
          content={openItem?.subMenuContent}
        />
      )}
    </header>
  );
};
 
export default Header;
