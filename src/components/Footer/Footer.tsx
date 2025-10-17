import SkyLogo from '../../assets/sky-logo.png';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 pt-3 pb-2 text-sm text-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        
        {/* Center: Links */}
        <div className="order-2 md:order-2 w-full md:flex-1 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center md:gap-7 gap-2 text-left md:text-center lg:px-4">
          <a href="#">Privacy options</a>
          <a href="#">Terms & conditions</a>
          <a href="#">Privacy & cookies notice</a>
          <a href="#">Accessibility</a>
          <a href="#">Site map</a>
          <a href="#">Contact us</a>
          <a href="#">Complaints</a>
          <a href="#">Sky Group</a>
          <a href="#">Store locator</a>
        </div>

        {/* Right: Dropdown (only shown for md and up) */}
        <div className="hidden md:flex items-center order-3 ml-auto">
          <label className="mr-2">Country:</label>
          <select className="border border-gray-300 rounded px-2">
            <option>UK</option>
            <option>US</option>
            <option>India</option>
          </select>
        </div>

        {/* Left: Logo and mobile-only dropdown */}
        <div className="order-3 md:order-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:pl-6 flex-shrink-0 w-full md:w-auto">
          <div className="flex flex-row items-center gap-3">
            <img src={SkyLogo} alt="Sky" className="h-[25px] w-10" />
            <p className="whitespace-nowrap">© 2025 Sky UK</p>

            {/* Dropdown for mobile only */}
            <div className="md:hidden flex items-center">
              <label className="mr-2">Country:</label>
              <select className="border border-gray-300 rounded px-2">
                <option>UK</option>
                <option>US</option>
                <option>India</option>
              </select>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
