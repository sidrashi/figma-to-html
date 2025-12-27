import hiw1 from "../assests/hiw1.jpg";
import hiw2 from "../assests/hiw2.jpg";
import subscard from "../assests/subscription-card.svg";
import SectionWrapper from "../layout/SectionWrapper";

function Hiw() {
  return (
    <SectionWrapper>
      <div className="mx-6 sm:mx-10">
        {/* hiw header */}
        <div className="max-w-150.5 lg:max-w-170 text-center mx-auto ">
          <h2 className="text-[42px] leading-12 md:text-[56px]">
            The way design
            <span className="font-nostalgic"> should've </span>
            been done in the first place
          </h2>
        </div>
        {/* Cards layout */}
        <div className="grid grid-cols-1 gap-8 max-w-120 mx-auto mt-14">
          {/* Card 1 */}
          <div
            className="bg-white rounded-2xl border border-[#0813ff] min-h-110 bg-cover relative overflow-hidden animate-slide-up"
            style={{ backgroundImage: `url(${hiw1})` }}
          >
            <div className="absolute bottom-0 h-50 z-10 pt-20 px-8 pb-8 bg-yellow-glow">
              <h4 className="text-2xl font-medium leading-[110%] mb-3">
                Subscribe
              </h4>
              <p className="text-base leading-5 text-[#0000008c]">
                Subscribe to a plan & request as many designs as you'd like.
              </p>
            </div>
            <img
              src={subscard}
              alt="subscription-card"
              className="max-w-full inline-block absolute top-[7%] left-[25%] md:left-[30%] opacity-0 scale-110 animate-slide-left"
            />
          </div>
          {/* Card 1 */}
          <div
            className="bg-white rounded-2xl border border-[#0813ff] min-h-110 bg-cover relative overflow-hidden animate-slide-up"
            style={{ backgroundImage: `url(${hiw2})` }}
          >
            <div className="absolute bottom-0 h-50 z-10 pt-20 px-8 pb-8 bg-blue-glow text-white">
              <h4 className="text-2xl font-medium leading-[110%] mb-3">
                Request
              </h4>
              <p className="text-base leading-5 text-[#fffc]">
                Request whatever you'd like, from mobile apps to logos.
              </p>
            </div>
            <div className="relative top-20">
              <div className="flex flex-col items-stretch gap-5">
                {/* Marquee 1 */}
                <div className="animate-marquee flex w-max">
                  <div className="flex gap-1.5">
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Logos{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Social Media{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Mobile apps{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Presentations{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Email{" "}
                    </span>    
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Logos{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Social Media{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Mobile apps{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Presentations{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Email{" "}
                    </span>    
                  </div>   
                </div>
                {/* Marquee 2 */}
                <div className="animate-marquee flex w-max">
                  <div className="flex gap-1.5">
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Webflow{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Print design{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Ad creative{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Packaging{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Landing pages{" "}
                    </span>    
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Webflow{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Print design{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                     Ad creative{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Packaging{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Landing pages{" "}
                    </span>    
                  </div>   
                </div>
                {/* Marquee 1 */}
                <div className="animate-marquee flex w-max">
                  <div className="flex gap-1.5">
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Logos{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Display ads{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      User interface{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Email{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      branding{" "}
                    </span>    
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Logos{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Display ads{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      User interface{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Email{" "}
                    </span>
                    <span className="px-3 py-1.5 bg-[#ffffff7d] text-black text-base text-center w-fit rounded-4xl ">
                      Branding{" "}
                    </span>    
                  </div>   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // vertical lines */}
      <div className="bg-[#ddced3] w-0.5 h-full absolute top-0 right-0"></div>
      <div className="bg-[#ddced3] w-0.5 h-full absolute top-0 left-0"></div>
    </SectionWrapper>
  );
}

export default Hiw;
