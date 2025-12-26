import bg from "../assests/hero.jpg";
import logo from "../assests/logo.svg";
import smiley from "../assests/herosmiley.png";
import Lottie from "lottie-react";
import circle from "../assests/animated-circle.json";
import float from "../assests/float-image.png";

function Hero() {
  return (
    <div className="px-4 relative">
      <div className="pt-8 lg:pt-16 max-w-300 mx-auto pb-14 relative">
        <div className="mx-6 sm:mx-10">
          {/* hero container */}
          <div className="relative z-2 flex flex-col lg:flex-row lg:items-stretch items-start justify-between gap-8">
            {/* hero left */}
            <div className="flex-1 w-full">
              {/* hero left top */}
              <div className="flex items-start justify-between gap-5">
                <a
                  href="#"
                  className="flex items-center max-w-full cursor-pointer"
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M20.501 6.028V6h-.02A10.28 10.28 0 0 0 4.519 6H4.5v.028a10.262 10.262 0 0 0 0 12.944V19h.02a10.28 10.28 0 0 0 15.962 0h.021v-.028a10.262 10.262 0 0 0 0-12.944zM13 6V3.272A4.533 4.533 0 0 1 15.54 6zm2.935 1a16.827 16.827 0 0 1 .853 5H13V7zM12 3.272V6H9.46A4.533 4.533 0 0 1 12 3.272zM12 7v5H8.212a16.827 16.827 0 0 1 .853-5zm-4.787 5H3.226a9.234 9.234 0 0 1 1.792-5h2.984a17.952 17.952 0 0 0-.79 5zm0 1a17.952 17.952 0 0 0 .789 5H5.018a9.234 9.234 0 0 1-1.792-5zm1 0H12v5H9.065a16.827 16.827 0 0 1-.853-5zM12 19v2.728A4.533 4.533 0 0 1 9.46 19zm1 2.728V19h2.54A4.533 4.533 0 0 1 13 21.728zM13 18v-5h3.788a16.827 16.827 0 0 1-.853 5zm4.787-5h3.987a9.234 9.234 0 0 1-1.792 5h-2.984a17.952 17.952 0 0 0 .79-5zm0-1a17.952 17.952 0 0 0-.789-5h2.984a9.234 9.234 0 0 1 1.792 5zm1.352-6h-2.501a8.524 8.524 0 0 0-1.441-2.398A9.306 9.306 0 0 1 19.139 6zM9.803 3.602A8.524 8.524 0 0 0 8.363 6H5.86a9.306 9.306 0 0 1 3.942-2.398zM5.861 19h2.501a8.524 8.524 0 0 0 1.441 2.398A9.306 9.306 0 0 1 5.861 19zm9.336 2.398A8.524 8.524 0 0 0 16.637 19h2.502a9.306 9.306 0 0 1-3.942 2.398z"></path>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                    </g>
                  </svg>
                  <img
                    src={logo}
                    alt="logo"
                    className="w-24 max-w-full inline-block"
                  />
                </a>
                <div className="hidden md:flex md:gap-2">
                  <a
                    href="#"
                    target="_blank"
                    className="inline-flex items-center justify-center text-[15px] font-medium max-w-full px-4 py-2 rounded-lg border-[#ddced3] border gap-2 hover:bg-white hover:border-white"
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 -0.5 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.36343 6.36195C7.24343 5.43495 7.55443 5.17495 7.92943 5.05395C8.18895 4.98595 8.46112 4.98217 8.72243 5.04295C9.06643 5.14295 9.15743 5.21895 10.2854 6.34295C11.2764 7.32995 11.3754 7.43695 11.4704 7.62995C11.6521 7.96873 11.6805 8.36894 11.5484 8.72995C11.4484 9.00495 11.3064 9.18695 10.7054 9.78995L10.3134 10.183C10.2105 10.2876 10.1863 10.4464 10.2534 10.577C11.1244 12.0628 12.36 13.3019 13.8434 14.177C14.0142 14.2684 14.2245 14.2389 14.3634 14.104L14.7404 13.733C14.9734 13.4941 15.2202 13.2691 15.4794 13.059C15.8866 12.809 16.3939 12.7867 16.8214 13C17.0304 13.1 17.0994 13.162 18.1214 14.182C19.1754 15.233 19.2054 15.266 19.3214 15.507C19.5397 15.9059 19.5374 16.3891 19.3154 16.786C19.2024 17.01 19.1334 17.091 18.5404 17.697C18.1824 18.063 17.8454 18.397 17.7914 18.446C17.3022 18.851 16.6746 19.0497 16.0414 19C14.883 18.8944 13.7617 18.5363 12.7564 17.951C10.5296 16.7711 8.63383 15.0521 7.24243 12.951C6.93937 12.5112 6.66994 12.0492 6.43643 11.569C5.81001 10.4953 5.48653 9.27189 5.50043 8.02895C5.54825 7.37871 5.86008 6.77637 6.36343 6.36195Z"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    Book a call
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="inline-flex items-center justify-center text-[15px] text-white bg-[linear-gradient(#444,#000)] font-medium max-w-full px-4 py-2 rounded-lg border-black border gap-2 transition-all duration-200 ease-in-out shadow-sm hover:shadow-gray-950"
                  >
                    See pricing
                  </a>
                </div>
              </div>
              {/* hero left bottom   */}
              <div className=" mt-12 md:mt-20 md:max-w-137.5 lg:mt-30">
                <h1 className="mb-6 md:text-7xl md:leading-20 lg:text-[82px] ">
                  Figma to HTML subscription for{" "}
                  <span className="font-nostalgic">everyone </span>
                </h1>
                <p className="inline md:block">Pause or cancel anytime.</p>
              </div>
            </div>
            {/* hero right */}
            <div className="w-full max-w-96 rounded-2xl relative">
              <div
                className="bg-black text-white rounded-2xl border border-[#0813ff] min-h-full hero-shadow bg-cover bg-top-left p-8 relative overflow-hidden"
                style={{ backgroundImage: `url(${bg})` }}
              >
                <div className="bg-black text-white text-base border border-[#fff3] rounded-[100vw] inline-flex justify-center items-center py-3 px-4  ">
                  <Lottie
                    animationData={circle}
                    loop={true}
                    autoplay
                    className="w-6 h-6"
                  />
                  Start today
                </div>
                <div className="mt-20">
                  <h1>Join</h1>
                  <h1>Designjoy</h1>
                  <p className="mt-4 text-base text-white font-normal">
                    One Subcription to rule them all
                  </p>
                  <a
                    href="#"
                    className="inline-block p-4 cursor-pointer text-black hover:text-white bg-white hover:bg-black text-center w-full rounded-lg mt-6 text-xl font-medium animate-slide-up"
                  >
                    See pricing
                  </a>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center mt-8 text-white max-w-full animate-slide-up"
                >
                  <div className="flex justify-start items-center gap-3">
                    <img src={smiley} alt="smiley" className="size-14" />
                    <div className="flex flex-col">
                      <span>Book a 15-min intro call</span>
                      <span className="text-[#ffffff87]">Schedule now</span>
                    </div>
                  </div>
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0">
                      <rect
                        x="-2.4"
                        y="-2.4"
                        width="28.80"
                        height="28.80"
                        rx="14.4"
                        fill="#fff"
                        strokewidth="0"
                      ></rect>
                    </g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                        fill="#000000"
                      ></path>{" "}
                    </g>
                  </svg>
                </a>
                <img
                  src={float}
                  alt="floating image"
                  className="absolute top-0 -right-[30%] w-62.5 md:w-77.5 animate-float "
                />
              </div>
            </div>
          </div>
        </div>
        {/* // vertical lines */}
        <div className="bg-[#ddced3] w-0.5 h-full absolute top-0 right-0"></div>
        <div className="bg-[#ddced3] w-0.5 h-full absolute top-0 left-0"></div>
      </div>
    </div>
  );
}

export default Hero;
