import React from "react";
import "./Finance.css";

function Finance() {
  return (
    <div>
      <div className="flex justify-center  flex-col items-center">
        <div className="cont20    mt-12">
          <div className="con2 w-full h-full items-end flex rounded-xl">
            <div className="flex flex-col    gap-4  w-full md:mb-24 mb-10 pl-20   max-sm:pl-3">
              <h1 className="text-white text-2xl md:text-5xl font-bold shadow-xl   ">
                Become Expert in Finance in 5 Weeks
              </h1>
              <h2 className="text-white md:text-lg text-md font-normal shadow-lg">
                Our live, online Finance workshop helps you build the skills to
                excel in the industry, get hired, and earn more.
              </h2>

              <div className=" w-full ">
                <button className="  md:w-24 py-3    cursor-pointer   rounded-xl px-4  bg-[#2094f3] text-slate-50 text-base font-bold leading-normal  hover:shadow-lg hover:shadow-gray-600">

                  <span className="truncate">Start</span>
                </button>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <h1 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
              Weekly Learning Objectives
            </h1>
            <div className="flex flex-col gap-10 px-4 py-10 @container ">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  What You'll Learn
                </h1>
                <p className="text-[#0d151c] text-base font-normal leading-normal max-w-[720px]">
                  This is a 5-week program. Each week we'll cover a different
                  aspect of Finance. You'll learn by
                  <br /> doing - we'll give you real-world projects to help you
                  practice what you learn. Here's the <br />
                  breakdown:
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8]  p-4 flex-col cursor-pointer ">
                  <div
                    className="text-[#0d151c]"
                    data-icon="Money"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                      Week 1: Introduction to Finance
                    </h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Understand the basics of Finance and its applications in
                      the industry.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8]  p-4 flex-col cursor-pointer  ">
                  <div
                    className="text-[#0d151c]"
                    data-icon="Presentation"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                      Week 2: Financial Analysis
                    </h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Learn how to analyze financial statements and make
                      investment decisions.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8]  p-4 flex-col cursor-pointer  ">
                  <div
                    className="text-[#0d151c]"
                    data-icon="Control"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M205.66,125.66a8,8,0,0,1-11.32,0L128,59.31,61.66,125.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,125.66Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                      Week 3: Investment Management
                    </h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Dive into the world of Investment Management and learn
                      about different asset classes.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8]  p-4 flex-col cursor-pointer ">
                  <div
                    className="text-[#0d151c]"
                    data-icon="Warning"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                      Week 4: Risk Management
                    </h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Master the art of Risk Management and its various
                      techniques.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8]  p-4 flex-col cursor-pointer ">
                {/* hover:shadow-lg hover:shadow-gray-600 */}
                  <div
                    className="text-[#0d151c]"
                    data-icon="Perspective"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M240,120H224V48a16,16,0,0,0-18.86-15.74l-160,29.09A16,16,0,0,0,32,77.09V120H16a8,8,0,0,0,0,16H32v42.91a16,16,0,0,0,13.14,15.74l160,29.09A16.47,16.47,0,0,0,208,224a16,16,0,0,0,16-16V136h16a8,8,0,0,0,0-16ZM48,77.09,208,48v72H48ZM208,208,48,178.91V136H208Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                      Week 5: Financial Modeling
                    </h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Explore the realm of Financial Modeling and its
                      applications in modern finance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finance;
