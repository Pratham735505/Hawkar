import React, { useState } from 'react';

const Section = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Tab data for Merchant Offering
  const merchantTabs = [
    {
      label: "Street Vendor",
      content: `Streamline your inventory with our advanced tracking system.
       Monitor stock levels, get low-stock alerts, and manage your products efficiently.
        Our smart analytics help you make informed decisions about restocking and product placement.`
    },
    {
      label: "Kirana",
      content: `Get detailed insights into your sales performance with comprehensive analytics.
       Track revenue trends, identify top-performing products, and understand customer behavior patterns to optimize your business strategy.`
    },
    {
      label: "Restaurant",
      content: `Boost your visibility with our integrated marketing solutions.
       Create promotional campaigns, manage discounts, and reach more customers through our platform's marketing features designed specifically for merchants.`
    }
  ];

  return (
    <div className="w-full ">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Merchant Offering */}
          <div className="bg-zinc-300 rounded-lg p-6 md:p-8">
            <h2 className="text-black text-center text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Merchant Offering
            </h2>
          

            {/* Tabs */}
          <div className=" space-y-6 md:space-y-8">
              {/* Tab Buttons */}
              <div className=" bg-white pt-2 pb-2 pl-1 pr-1 flex flex-row gap-2 justify-center items-center">
                {merchantTabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-3 py-2  rounded-md text-sm md:text-base font-medium transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-zinc-300 text-black hover:bg-zinc-400 border border-zinc-400'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}


                
              </div>

              <div className="text-black text-center text-2xl md:text-3xl font-bold mb-4 md:mb-6">Get Certified,<br/> Become Recognized</div>
              {/* Tab Content */}
              <div className="min-h-[120px] md:min-h-[140px]">
                <div className="bg-zinc-300 rounded-md p-4 md:p-6">
                  <div className=" text-black text-sm md:text-base leading-relaxed transition-all duration-500">
                    {merchantTabs[activeTab].content.split('.').filter(sentence => sentence.trim()).map((sentence, index) => (
                       <div key={index} className="">
                        {sentence.trim()}.
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Offering */}
          <div className="bg-zinc-300 rounded-lg p-6 md:p-8">
            <h2 className="text-black text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">
              Customer Offering
            </h2>
            
            
            <div className="space-y-4 md:space-y-6">
              <div className="bg-zinc-300 rounded-md p-4 md:p-6">
                <h3 className="text-black text-2xl md:text-3xl mb-3 text-center font-bold">
                  Easy Shopping Experience
                </h3>
                <br/>
                <p className="text-black text-sm md:text-base leading-relaxed">
                  Fresh Fruits & Vegetables at your home <br/>
                  Realtime tracking of vendors around you <br/>
                  Curbside Pickups <br/>
                  Earn rewards while shopping <br/>
                  Shop for instant vouchers <br/>
                  Redeem points for products
 <br/>                  Discounted seller coupons for extra flair
                </p>
              </div>

              
            

              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section;