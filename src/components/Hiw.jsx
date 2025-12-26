import React from "react";

function Hiw() {
  return (
    <div className="px-4 relative overflow-hidden">
      <div className="pt-16 max-w-300 mx-auto relative">
        <div className="mx-6 sm:mx-10">
          {/* hiw header */}
          <div className="max-w-150.5 lg:max-w-170 text-center mx-auto ">
            <h2 className="text-[42px] leading-12 md:text-[56px]" >
                The way design 
                <span className="font-nostalgic"> should've </span>
                been done in the first place
            </h2>
          </div>
        </div>
        {/* // vertical lines */}
        <div className="bg-[#ddced3] w-0.5 h-full absolute top-0 right-0"></div>
        <div className="bg-[#ddced3] w-0.5 h-full absolute top-0 left-0"></div>
      </div>
    </div>
  );
}

export default Hiw;
