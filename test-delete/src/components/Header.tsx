import svgPaths from "../imports/svg-wbsa5c2v6m";

function Logo() {
  return (
    <div className="h-[28.481px] w-[104.523px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 105 29"
      >
        <g id="logo">
          <path
            clipRule="evenodd"
            d={svgPaths.p32498e00}
            fill="white"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.ped81840}
            fill="white"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pbe38e00}
            fill="white"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p23981700}
            fill="white"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pcd3cc80}
            fill="white"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2225b670}
            fill="white"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p14ca7b00}
            fill="#26A69A"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p17d52600}
            fill="white"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2a1f0f00}
            fill="white"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p296b1e00}
            fill="white"
            fillRule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
}

function Avatar() {
  return (
    <div className="h-[29.231px] w-[29.687px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g>
          <mask
            height="30"
            id="mask0_1_1352"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            width="30"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d="M0 0H29.6873V29.2308H0V0Z"
              fill="white"
              fillRule="evenodd"
            />
          </mask>
          <g mask="url(#mask0_1_1352)">
            <path
              clipRule="evenodd"
              d={svgPaths.p3f9e500}
              fill="#4EB4E7"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Header() {
  return (
    <header className="bg-[#2b3643] h-[46px] w-full flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-30">
      <Logo />
      
      <div className="flex items-center">
        {/* Ocean Import Dropdown */}
        <div className="bg-[#0e223e] h-[46px] flex items-center px-4 text-white text-sm">
          <span>Ocean Import</span>
          <i className="fas fa-angle-down ml-2 text-white"></i>
        </div>
        
        {/* Search Bar */}
        <div className="bg-[#3f4f62] h-[46px] w-[290px] flex items-center justify-between px-4">
          <span className="text-[#959fad] text-[13px]">Search by B/L or Container No.</span>
          <i className="fas fa-search text-[#959fad]"></i>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center">
          {/* What's New */}
          <div className="bg-[#26a69a] h-[46px] w-32 flex flex-row items-center justify-center gap-2 px-4 text-white text-sm">
            <span className="whitespace-nowrap">What's New</span>
            <i className="fas fa-angle-down text-white"></i>
          </div>
          
          {/* To Do List */}
          <div className="w-10 h-[46px] flex items-center justify-center relative mx-[4px] my-[0px]">
            <i className="fas fa-list text-[#79869a] text-[17px]"></i>
            <div className="absolute bg-[#f3565d] rounded-full w-1.5 h-1.5 top-3.5 right-[14px] p-[0px] m-[0px] mx-[-8px] my-[0px]"></div>
          </div>
          
          {/* Notification */}
          <div className="w-10 h-[46px] flex items-center justify-center px-[8px] py-[0px] mx-[4px] my-[0px]">
            <i className="fas fa-bell text-[#79869a] text-[17px]"></i>
          </div>
          
          {/* Profile */}
          <div className="flex items-center gap-2 px-2 px-[16px] py-[0px]">
            <Avatar />
            <span className="text-[#c6cfda] text-sm">Nick</span>
            <div className="h-[4.664px] w-[7.998px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 8 5"
              >
                <path
                  d={svgPaths.p1d430500}
                  fill="#C6CFDA"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}