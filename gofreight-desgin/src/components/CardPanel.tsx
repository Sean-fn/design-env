import React, { useState } from "react";
import HblCard from "./HblCard";

interface HblCardData {
  id: number;
  hblNo: string;
  isHidden: boolean;
}

interface CardPanelProps {
  onAddClick?: () => void;
  onSortChange?: (value: string) => void;
  onOrderChange?: (order: 'asc' | 'desc') => void;
  onSettingClick?: () => void;
  sortValue?: string;
  sortOrder?: 'asc' | 'desc';
  hblCards?: HblCardData[];
  onCardClick?: (id: number) => void;
  activeHblId?: number | null;
}

export default function CardPanel({ 
  onAddClick,
  onSortChange,
  onOrderChange,
  onSettingClick,
  sortValue = "Create Date",
  sortOrder = 'desc',
  hblCards = [],
  onCardClick,
  activeHblId
}: CardPanelProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState(sortValue);
  const [currentOrder, setCurrentOrder] = useState<'asc' | 'desc'>(sortOrder);

  const sortOptions = [
    { value: "Create Date", label: "Create Date" },
    { value: "Update Date", label: "Update Date" },
    { value: "File No.", label: "File No." },
    { value: "HBL No.", label: "HBL No." },
  ];

  const handleSortChange = (value: string) => {
    setCurrentSort(value);
    setIsDropdownOpen(false);
    onSortChange?.(value);
  };

  const handleOrderToggle = () => {
    const newOrder = currentOrder === 'desc' ? 'asc' : 'desc';
    setCurrentOrder(newOrder);
    onOrderChange?.(newOrder);
  };

  return (
    <div className="content-stretch flex flex-col items-end justify-center relative w-full" data-name="Card Panel">
      {/* Add HB/L Button */}
      <button
        onClick={onAddClick}
        className="bg-neutral-200 h-[28px] relative w-full hover:bg-neutral-300 transition-colors cursor-pointer"
        data-name="Solid Button"
      >
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] h-[28px] items-center justify-center px-[10px] py-[4px] relative w-full">
            <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
              <i className="fas fa-plus text-[#aaaaaa] text-[14px]"></i>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Add HB/L
            </p>
          </div>
        </div>
      </button>

      {/* Only show the following sections when there are cards */}
      {hblCards.length > 0 && (
        <>
          {/* Divider */}
          <div className="content-stretch flex flex-col items-start px-0 py-[20px] relative shrink-0 w-full" data-name="hr & divider">
            <div className="flex items-center justify-center relative shrink-0 w-full">
              <div className="flex-none scale-y-[-100%] w-full">
                <div className="h-0 relative w-full" data-name=".Main / hr">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                      <line stroke="#EEEEEE" x2="184" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Bar and Settings */}
          <div className="content-stretch flex flex-col gap-[4px] items-start pb-[4px] pt-0 px-0 relative shrink-0 w-full">
            {/* Sort Controls */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Filter Bar">
              {/* Sort Selector */}
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Form Group">
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[100px] min-h-px min-w-px relative shrink-0" data-name="Text">
                  <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#c4c4c4] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[10px] whitespace-pre">Sort by:</p>
                  </div>
                </div>
                
                {/* Dropdown */}
                <div className="relative content-stretch flex gap-[2px] items-center shrink-0">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Select / Single Select">
                    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="select-wrap">
                      <div 
                        className="bg-white content-stretch flex gap-[4px] h-[24px] items-center pl-[5px] pr-0 py-[3px] relative shrink-0 cursor-pointer hover:bg-gray-50 transition-colors border border-[#e4e4e4]" 
                        data-name="container"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] relative shrink-0 text-[#333333] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {currentSort}
                        </p>
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="action-group">
                          <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[16px] border-l border-[#e4e4e4]" data-name="select-icon">
                            <i className={`fas fa-angle-${isDropdownOpen ? 'up' : 'down'} text-[#c6c6c6] text-[14px]`}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-[#e4e4e4] shadow-lg z-10 min-w-[120px]">
                      {sortOptions.map((option) => (
                        <div
                          key={option.value}
                          className={`px-3 py-2 cursor-pointer hover:bg-[#f0f0f0] text-[11px] ${
                            currentSort === option.value ? 'bg-[#f0f7ff] text-[#5b9bd1]' : 'text-[#333333]'
                          }`}
                          onClick={() => handleSortChange(option.value)}
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Order Toggle Button */}
              <button
                onClick={handleOrderToggle}
                className="content-stretch flex items-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                data-name="Text Button"
              >
                <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {currentOrder.toUpperCase()}
                </p>
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px] ml-1" data-name="icon-wrapper">
                  <i className={`fas fa-long-arrow-${currentOrder === 'desc' ? 'down' : 'up'} text-[#5b9bd1] text-[14px]`}></i>
                </div>
              </button>
            </div>

            {/* Card Setting Link */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Filter Option">
              <button
                onClick={onSettingClick}
                className="content-stretch flex gap-[3px] items-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                data-name="Text Button"
              >
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
                  <i className="fas fa-cogs text-[#333333] text-[12px]"></i>
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#777777] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Card Setting
                </p>
              </button>
            </div>
          </div>

          {/* HBL Cards List */}
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full mt-4" data-name="HBL cards">
            {hblCards.map((card) => (
              <HblCard
                key={card.id}
                hblNo={card.hblNo}
                subtitle="Ocean Import"
                shipper="ABC TRADING CO."
                consignee="PACIFIC IMPORTS INC."
                showTask={false}
                taskText=""
                pkg="100"
                weight="2,500 KG"
                measurement="12 CBM"
                arApBalance="0.00 / 0.00"
                hasNotice={false}
                isActive={activeHblId === card.id}
                isHidden={card.isHidden}
                onCardClick={() => onCardClick?.(card.id)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
