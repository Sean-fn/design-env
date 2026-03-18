import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface HblCardProps {
  hblNo?: string;
  subtitle?: string;
  shipper?: string;
  consignee?: string;
  showTask?: boolean;
  taskText?: string;
  pkg?: string;
  weight?: string;
  measurement?: string;
  arApBalance?: string;
  hasNotice?: boolean;
  backgroundColor?: string;
  onCardClick?: () => void;
  isActive?: boolean;
  isHidden?: boolean;
}

export default function HblCard({
  hblNo = "HBLNo.",
  subtitle = "Subtitle",
  shipper = "Shipper",
  consignee = "Consignee",
  showTask = true,
  taskText = "Task",
  pkg = "1",
  weight = "1 KG",
  measurement = "1 CBM",
  arApBalance = "100.00 / 100.00",
  hasNotice = true,
  backgroundColor = "#f3c200",
  onCardClick,
  isActive = false,
  isHidden = false
}: HblCardProps) {
  // When hidden, show a compact collapsed card that can be clicked to restore
  if (isHidden) {
    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer w-full"
        data-name="Card"
        onClick={onCardClick}
      >
        <div
          className="content-stretch flex items-center relative shrink-0 w-full hover:brightness-110 transition-all"
          style={{ backgroundColor }}
        >
          <div className="flex items-center gap-[5px] px-[7px] py-[6px] w-full">
            <i className="fas fa-chevron-right text-white text-[10px]"></i>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[12px] text-white truncate flex-1" style={{ fontVariationSettings: "'wdth' 100" }}>
              {hblNo}
            </p>
            <span className="font-['Open_Sans:Regular',sans-serif] font-normal text-[10px] text-white/80 shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              Click to expand
            </span>
          </div>
        </div>
        {/* Left Arrow Icon Container */}
        <div className="absolute h-[26px] left-[-24px] top-0 w-[24px]" data-name="Icon Container">
          <div className="h-[26px] overflow-clip relative rounded-[inherit] w-[24px] flex items-center justify-center">
            <i className="fas fa-location-arrow text-[#c6c6c6] text-[12px]"></i>
          </div>
          <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer hover:brightness-95 transition-all w-full"
      data-name="Card"
      onClick={onCardClick}
    >
      {/* Card Content with Yellow Background */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Select bg color here" style={{ backgroundColor }}>
        {/* Title Section */}
        <div className="h-[26px] relative shrink-0 w-full" data-name="Title">
          {/* Title Text */}
          <div className="absolute content-stretch flex gap-[5px] items-start left-0 pb-0 pt-[7px] px-[7px] top-0 right-[40px]" data-name="Title">
            <div className="h-[19px] relative shrink-0 w-[13px]">
              <i className="fas fa-info-circle text-white text-[14px] absolute left-0 top-0"></i>
            </div>
            <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
              {hblNo}
            </p>
          </div>
          
          {/* Notice Badge */}
          {hasNotice && (
            <div className="absolute bg-white content-stretch flex items-start right-[7px] p-[7px] rounded-[15px] size-[27px] top-[3px]" data-name="notice-change color here">
              <div aria-hidden="true" className="absolute border-2 border-[#f3c200] border-solid inset-[-1px] pointer-events-none rounded-[16px] shadow-[-1px_2px_0px_0px_rgba(0,0,0,0.1)]" />
              <i className="fas fa-exclamation-circle text-[#f3565d] text-[14px]"></i>
            </div>
          )}
        </div>

        {/* Subtitle */}
        <div className="relative shrink-0 w-full" data-name="Subtitle">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pb-[7px] pl-[25px] pr-[7px] pt-0 relative w-full">
              <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="h-[160px] relative shrink-0 w-full" data-name="Content - max:160px">
          {/* Shipper & Consignee Text */}
          <div className="absolute content-stretch flex flex-col h-[160px] items-start left-0 overflow-clip top-0 w-full pr-[65px]" data-name="Text">
            <div className="content-stretch flex items-center pb-[10px] pl-[7px] pr-0 pt-0 relative shrink-0 w-full">
              <p className="basis-0 font-['Open_Sans:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[13px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                {shipper}
              </p>
            </div>
            <div className="content-stretch flex items-center pb-[10px] pl-[7px] pr-0 pt-0 relative shrink-0 w-full">
              <p className="basis-0 font-['Open_Sans:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[13px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                {consignee}
              </p>
            </div>
          </div>

          {/* Anchor Icon (Background) */}
          <div className="absolute bottom-[3px] opacity-40 right-[5px] size-[60px]" data-name="Icon">
            <i className="fas fa-anchor text-white text-[60px] absolute inset-0 flex items-center justify-center"></i>
          </div>

          {/* Task Notice */}
          {showTask && (
            <div className="absolute bg-[rgba(0,0,0,0.05)] content-stretch flex items-center left-0 p-[5px] top-[134px] gap-1" data-name="notice task">
              <i className="fas fa-exclamation-triangle text-white text-[12px]"></i>
              <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal] whitespace-pre">{taskText}</p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Info Section */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom">
          {/* PKG */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-white h-px opacity-40 shrink-0 w-full" data-name="border" />
            <div className="relative shrink-0 w-full">
              <div className="size-full">
                <div className="content-stretch flex items-start px-[7.5px] py-[1.5px] relative w-full">
                  <div className="basis-0 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal grow h-[18px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[normal]">PKG: {pkg}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weight */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-white h-px opacity-40 shrink-0 w-full" data-name="border" />
            <div className="relative shrink-0 w-full">
              <div className="size-full">
                <div className="content-stretch flex items-start px-[7.5px] py-[1.5px] relative w-full">
                  <div className="basis-0 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal grow h-[18px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[normal]">Weight: {weight}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Measurement */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-white h-px opacity-40 shrink-0 w-full" data-name="border" />
            <div className="relative shrink-0 w-full">
              <div className="size-full">
                <div className="content-stretch flex items-start px-[7.5px] py-[1.5px] relative w-full">
                  <div className="basis-0 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal grow h-[18px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[normal]">Measurement: {measurement}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AR/AP Balance */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-white h-px opacity-40 shrink-0 w-full" data-name="border" />
            <div className="relative shrink-0 w-full">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start px-[7.5px] py-[1.5px] relative w-full">
                  <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[normal] whitespace-pre">AR/AP Balance {arApBalance}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Arrow Icon Container */}
      <div className="absolute h-[26px] left-[-24px] top-0 w-[24px]" data-name="Icon Container">
        <div className="h-[26px] overflow-clip relative rounded-[inherit] w-[24px] flex items-center justify-center">
          <i className={`fas fa-location-arrow text-[#6a99cc] text-[12px]`}></i>
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none" />
      </div>
    </motion.div>
  );
}