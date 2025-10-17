import React from "react";
import SkyLogo from '../../../assets/sky-logo.png';
 
const Logo: React.FC = () => {
  return (
    <a href="/" className="flex-shrink-0 flex items-center">
      <img src={SkyLogo} alt="Sky" className="h-[25px] w-10" />
    </a>
  );
};
 
export default Logo;
