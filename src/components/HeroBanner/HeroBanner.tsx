export default function HeroBanner() {
  return (
    <section className='relative w-full overflow-hidden flex flex-col items-center'>
      {/* Desktop / Tablet Image */}
      <img
        src='https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/blt801ce9adcc533b2f/690390c3531ab003ab280844/2025_Q4_October_Black_Friday_PHP_Hero_ETV&FF500_Desktop_v1.png?format=webp&imageManager=true&impolicy=resize&width=1600'
        alt='Sky Banner Desktop'
        className='hidden md:block w-full h-[500px] md:h-[600px] lg:h-[650px] object-contain'
      />

      {/* Mobile Image */}
      <img
        src='https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/blta8823a79e1f79722/68d6c1bc8cd081824821ebb3/2025_Q3_Sept_UTV_Brassic_php_mobile-min.png?format=webp&imageManager=true&impolicy=resize&width=800'
        alt='Sky Banner Mobile'
        className='block md:hidden w-full h-[500px] object-contain'
      />

      {/* Text Content */}
      <div className='absolute inset-0 flex items-center justify-start px-6 md:px-10 lg:px-16'>
        {/* Desktop/Tablet Text */}
        <div className='hidden md:block max-w-xl space-x-4 md:space-x-6 text-white' data-testid='desktop-content'>
          <img
            src='https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/bltc2aabb6cfd1b30fa/690b0ef4f78cb4acb25e41f7/2025_Q4_November_Black_Friday_PHP_Hero_Logo_ETV&FF500_v1.png'
            alt='Sky Banner Desktop'
            className='hidden md:block w-full pl-50 h-[100px] md:h-[200px] lg:h-[250px] object-contain'
          />
          <p className='text-black text-sm md:text-base pl-60'>
            Sky, Netflix and discovery+, supercharged with <br className='hidden md:block' />
            <span className='font-medium text-black'>500Mbps Full Fibre Broadband</span> for just £35/month. Our lowest ever price.
          </p>

          <div className='flex flex-wrap gap-4 pl-60 pt-4'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition'>
              Buy now
            </button>
            <button className='bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-md font-medium transition'>
              See all deals
            </button>
          </div>
        </div>

        {/* Mobile Text (centered below image) */}
        <div className='md:hidden absolute text-center bottom-6 left-0 w-full text-white px-8' data-testid='mobile-content'>
          <p className='text-base font-light'>Our lowest price is back</p>

          <h1 className='text-2xl sm:text-3xl font-semibold leading-snug mt-2'>
            Sky Essential TV &amp; Sky Full Fibre
          </h1>

          <p className='text-gray-100 text-base sm:text-lg mt-3'>
            Sky, Netflix and discovery+, with{' '}
            <span className='font-medium text-white'>300Mbps Full Fibre Broadband</span> for £35/month
          </p>

          <div className='flex gap-4 mt-5 justify-center'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base rounded-md transition'>
              Buy now
            </button>
            <button className='bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 text-base rounded-md transition'>
              See all deals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
