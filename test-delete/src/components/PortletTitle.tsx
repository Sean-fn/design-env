import React from "react";
import svgPaths from "../imports/svg-b818scy7q3";

interface PortletTitleProps {
  title?: string;
  statusLabel?: string;
  type?: 'collapse' | 'close' | 'remove';
  variant?: 'default' | 'hbl';
  onToolsClick?: () => void;
  onActionClick?: () => void;
  className?: string;
}

function Remark() {
  return (
    <div
      className="absolute h-[22px] left-0 top-[-4px] w-[15px]"
      data-name="remark"
    >
      <div className="absolute bottom-[-9.09%] left-0 right-[-13.33%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 24"
        >
          <g id="remark">
            <g filter="url(#filter0_d_19_12202)" id="Rectangle 122">
              <path d={svgPaths.p3ed8c300} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3ab1fa00} stroke="var(--stroke-0, #DDDDDD)" />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="24"
              id="filter0_d_19_12202"
              width="17"
              x="7.32539e-07"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="2" dy="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_19_12202"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_19_12202"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function RemarkContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 h-full items-start justify-start px-0 py-2 relative shrink-0 w-[15px]"
      data-name="Container"
    >
      <Remark />
    </div>
  );
}

export default function PortletTitle({
  title = "MB/L  1LAX14115152",
  statusLabel = "Not Submitted",
  type = 'collapse',
  variant = 'default',
  onToolsClick,
  onActionClick,
  className = ""
}: PortletTitleProps) {
  
  // HBL variant: yellow background (#f3c200), default: gray (#555555)
  const bgColor = variant === 'hbl' ? 'bg-[#f3c200]' : 'bg-[#555555]';
  
  const getActionIcon = () => {
    switch (type) {
      case 'collapse':
        return <i className="fas fa-angle-down text-[#ffffff] text-[16px]"></i>;
      case 'close':
        return <i className="fas fa-angle-up text-[#ffffff] text-[16px]"></i>;
      case 'remove':
        return <i className="fas fa-times text-[#ffffff] text-[14px]"></i>;
      default:
        return <i className="fas fa-angle-down text-[#ffffff] text-[16px]"></i>;
    }
  };

  return (
    <div
      className={`${bgColor} box-border content-stretch flex flex-row h-[42px] items-center justify-between px-2 sm:px-4 py-0 relative w-full ${className}`}
      data-name="Portlet Title"
    >
      {/* Left Section */}
      <div className="box-border content-stretch flex flex-row gap-2 sm:gap-5 items-center justify-start p-0 relative min-w-0 flex-1">
        <div className="flex flex-row items-center self-stretch min-w-0">
          <div className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative min-w-0">
            <RemarkContainer />
            <div className="box-border content-stretch flex flex-row gap-1 h-10 items-center justify-start px-0 py-2.5 relative min-w-0">
              <div
                className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative text-[#ffffff] text-[17px] text-left truncate"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="block leading-[17px] truncate">{title}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[#888888] box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-1.5 py-1 relative shrink-0"
          data-name="Label"
        >
          <div
            className="flex flex-col font-['Open_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[13px] text-left text-nowrap tracking-[0.13px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
              {statusLabel}
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="box-border content-stretch flex flex-row gap-2 sm:gap-5 items-center justify-start p-0 relative shrink-0">
        {/* Tools Button */}
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
          <div 
            className="relative shrink-0 cursor-pointer hover:opacity-80"
            data-name="Outline Button"
            onClick={onToolsClick}
          >
            <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start px-2.5 py-1 relative border border-white hover:bg-white/10 cursor-pointer transition-colors">
              <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
                <i className="fas fa-cogs text-[#ffffff] text-[14px]"></i>
              </div>
              <div
                className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-left hidden sm:block"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="block leading-[normal] whitespace-pre">Tools</p>
              </div>
              <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-3.5 hidden sm:flex">
                <i className="fas fa-angle-down text-[#ffffff] text-[14px]"></i>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Icon */}
        <div 
          className="box-border content-stretch flex flex-row h-[18px] items-center justify-center p-0 relative shrink-0 w-3.5 cursor-pointer hover:opacity-80"
          onClick={onActionClick}
        >
          <div className="basis-0 box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-center w-full">
              {variant === 'hbl'
                ? <i className="fas fa-times text-[#ffffff] text-[14px]"></i>
                : getActionIcon()
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}