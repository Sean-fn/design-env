import React, { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface TableHeaderCellWithDropdownProps {
  text: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  variant?: "light" | "dark";
  width?: string;
  className?: string;
}

export default function TableHeaderCellWithDropdown({ 
  text, 
  options,
  value,
  onChange,
  variant = "light", 
  width, 
  className = "" 
}: TableHeaderCellWithDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div 
      className={`${width ? width : 'basis-0 grow'} min-h-px min-w-px relative shrink-0 overflow-visible ${variant === "dark" ? "bg-[#888888]" : "bg-[rgba(255,255,255,0)]"} ${className}`} 
      data-name="Table Head Cell With Dropdown"
    >
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[1px_1px_2px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start justify-center px-[5px] py-[3px] relative size-full">
          {/* Header Text */}
          <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
            <p className={`font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-nowrap ${variant === "dark" ? "text-white" : "text-[#333333]"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
              {text}
            </p>
          </div>

          {/* Dropdown */}
          <div className="relative" ref={selectRef}>
            {/* Select Container */}
            <div className="content-stretch flex items-start justify-center relative shrink-0">
              <div 
                className="bg-white content-stretch flex gap-[4px] h-[24px] items-center pl-[5px] pr-0 py-[3px] relative shrink-0 cursor-pointer"
                onClick={handleToggle}
              >
                <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
                <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333333] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {selectedOption ? selectedOption.label : 'Select'}
                </p>
                {/* Select Icon */}
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[16px]">
                    <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <i className={`fas ${isOpen ? 'fa-angle-up' : 'fa-angle-down'} text-[#c6c6c6] text-[14px]`}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown Options */}
            {isOpen && (
              <div className="absolute top-full left-0 z-50 mt-1 bg-white border border-[#e4e4e4] shadow-lg overflow-hidden min-w-[80px]">
                <div className="max-h-48 overflow-y-auto">
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className={`
                        cursor-pointer px-[5px] py-[3px] text-[11px] hover:bg-[#f5f5f5]
                        font-['Open_Sans:Regular',_sans-serif] font-normal text-[#333333] leading-[1.429]
                        ${selectedOption?.value === option.value ? 'bg-[#e8f4fd]' : ''}
                      `}
                      style={{ fontVariationSettings: "'wdth' 100" }}
                      onClick={() => handleSelect(option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
