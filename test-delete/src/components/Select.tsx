import React, { useState, useRef, useEffect } from "react";
import { useAIAnimation } from "./AIAnimationContext";
import AIFieldTooltip from "./AIFieldTooltip";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  isAutoComplete?: boolean;
  isAIFilled?: boolean;
  isAIUnmatched?: boolean;
  aiExtractedText?: string;
}

export default function Select({ 
  options = [], 
  value, 
  onChange, 
  placeholder = "Text", 
  disabled = false,
  className = "",
  isAutoComplete = false,
  isAIFilled = false,
  isAIUnmatched = false,
  aiExtractedText
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [userEdited, setUserEdited] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { shouldAnimate, reviewCompleted } = useAIAnimation();

  // Store original AI value on first render
  const originalValueRef = useRef<string | undefined>(
    isAIFilled ? value : undefined
  );

  // AI highlight stays visible even after edits
  const showAI = isAIFilled;
  const showUnmatched = isAIUnmatched;

  const selectedOption = options.find(option => option.value === value);

  const filteredOptions = isAutoComplete 
    ? options.filter(opt => opt.label.toLowerCase().includes(searchValue.toLowerCase()))
    : options;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
        setSearchValue(""); // Reset search on close
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && isAutoComplete && searchInputRef.current) {
      // Focus input when opened
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen, isAutoComplete]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setIsFocused(!isOpen);
      if (!isOpen) setSearchValue(""); // Reset search on open
    }
  };

  const handleSelect = (optionValue: string) => {
    if (!disabled) {
      if ((isAIFilled || isAIUnmatched) && !userEdited) {
        setUserEdited(true);
      }
      onChange?.(optionValue);
      setIsOpen(false);
      setIsFocused(false);
      setSearchValue("");
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled) {
      if ((isAIFilled || isAIUnmatched) && !userEdited) {
        setUserEdited(true);
      }
      onChange?.("");
      setIsOpen(false);
      setIsFocused(false);
    }
  };

  const aiGradient = 'linear-gradient(to right, rgba(112, 218, 194, 0.35) 0%, rgba(192, 220, 160, 0.35) 50%, rgba(254, 215, 114, 0.35) 100%)';
  const unmatchedGradient = 'linear-gradient(to right, rgba(255, 179, 71, 0.30) 0%, rgba(255, 216, 155, 0.30) 100%)';

  const getBackground = () => {
    if (disabled) return undefined;
    if (reviewCompleted) return { background: 'transparent' };
    if (showUnmatched) return { background: unmatchedGradient };
    if (showAI) return { background: aiGradient };
    return undefined;
  };

  // 根據狀態決定容器樣式
  const getContainerClasses = () => {
    if (disabled) {
      return "bg-[#e4e4e4]";
    }
    if ((showAI || showUnmatched) && !reviewCompleted) {
      return "";
    }
    return "bg-[#ffffff]";
  };

  // 根據狀態決定邊框樣式
  const getBorderClasses = () => {
    if (disabled) {
      return "border border-[#e4e4e4]";
    }
    if (isFocused || isOpen) {
      return "border-2 border-[#5b8aff]";
    }
    if (showUnmatched && !reviewCompleted) {
      return "border border-[#f0ad4e]";
    }
    return "border border-[#e4e4e4]";
  };

  // Display text: matched option label, or unmatched extracted text (italic), or placeholder
  const displayText = selectedOption 
    ? (isAutoComplete ? selectedOption.label : selectedOption.label)
    : (showUnmatched && aiExtractedText ? aiExtractedText : placeholder);
  const isShowingExtractedText = !selectedOption && showUnmatched && !!aiExtractedText;

  // shimmer class for first-visit animation
  const shimmerClass = (showAI || showUnmatched) && shouldAnimate ? 'ai-reveal' : '';

  // Tooltip config
  const tooltipEnabled = isAIFilled || isAIUnmatched;
  const tooltipOriginalValue = isAIUnmatched
    ? aiExtractedText
    : (originalValueRef.current
        ? (options.find(o => o.value === originalValueRef.current)?.label || originalValueRef.current)
        : undefined);

  return (
    <AIFieldTooltip
      enabled={tooltipEnabled}
      originalValue={tooltipOriginalValue}
      isUnmatched={isAIUnmatched}
      isEdited={userEdited}
    >
      <div className={`relative w-full ${className}`} ref={selectRef}>
        {/* Select Container */}
        <div className="flex flex-row items-start justify-center p-0 relative shrink-0 w-full">
          <div 
            className={`
              basis-0 grow h-6 min-h-px min-w-px relative shrink-0 cursor-pointer
              ${getContainerClasses()}
              ${shimmerClass}
            `}
            onClick={handleToggle}
            style={{
              ...getBackground(),
              transition: 'background 0.8s ease-out',
            }}
          >
            <div 
              className={`
                absolute inset-0 pointer-events-none
                ${getBorderClasses()}
              `}
              aria-hidden="true"
              style={{ transition: 'border-color 0.6s ease' }}
            />
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex flex-row gap-1 h-6 items-center justify-start pl-[5px] pr-0 py-[3px] relative w-full">
                {/* Unmatched TP warning icon inside select */}
                {showUnmatched && !reviewCompleted && (
                  <i 
                    className="fas fa-exclamation-triangle text-[#e67e22] text-[10px] shrink-0"
                  />
                )}
                {/* Text Content */}
                <div
                  className="basis-0 font-['Open_Sans:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[11px] text-left overflow-hidden"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p className={`block leading-[1.429] truncate ${isShowingExtractedText ? 'italic text-[#999]' : 'text-[#333333]'}`}>
                    {displayText}
                  </p>
                </div>

                {/* Action Group */}
                <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
                  {/* Clear Button - only show when has value and not disabled */}
                  {selectedOption && !disabled && (
                    <div 
                      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 cursor-pointer hover:opacity-70"
                      onClick={handleClear}
                    >
                      <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0">
                        <i className="fas fa-times text-[#c6c6c6] text-[12px]"></i>
                      </div>
                    </div>
                  )}

                  {/* Select Icon */}
                  <div className="box-border content-stretch flex flex-row gap-2.5 h-6 items-center justify-center p-0 relative shrink-0 w-4">
                    <div 
                      className="absolute border-[#e4e4e4] border-[0px_0px_0px_1px] border-solid left-0 top-[1px] bottom-[1px] pointer-events-none"
                      aria-hidden="true"
                    />
                    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                      <i className={`fas ${isOpen ? 'fa-angle-up' : 'fa-angle-down'} text-[#c6c6c6] text-[14px]`}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Options */}
        {isOpen && !disabled && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-[#e4e4e4] rounded shadow-lg overflow-hidden">
            
            {/* AutoComplete Search Bar */}
            {isAutoComplete && (
              <div className="p-[8px] pb-2 bg-white border-b border-[#f0f0f0]">
                <div className="relative w-full h-[26px] bg-white rounded-[20px] border border-[#e4e4e4] flex items-center overflow-hidden">
                   <div className="flex items-center justify-center pl-[10px] pr-2">
                      <i className="fas fa-search text-[#c6c6c6] text-[14px]"></i>
                   </div>
                   <input
                      ref={searchInputRef}
                      type="text"
                      className="w-full h-full border-none outline-none text-[12px] text-[#333333] placeholder-[#999999] bg-transparent font-['Open_Sans']"
                      placeholder="Search Input"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                   />
                </div>
              </div>
            )}

            <div className={`max-h-48 overflow-y-auto ${isAutoComplete ? 'py-0' : ''}`}>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <div
                    key={option.value}
                    className={`
                      cursor-pointer
                      ${isAutoComplete 
                        ? 'px-[14px] py-[8px] text-[14px] hover:bg-[#f4f4f4] border-b border-[#f9f9f9] last:border-0' 
                        : 'px-[5px] py-[3px] text-[11px] hover:bg-[#f5f5f5]'}
                      font-['Open_Sans:Regular',_sans-serif] font-normal text-[#333333] leading-[1.429]
                      ${selectedOption?.value === option.value ? (isAutoComplete ? 'bg-[#f4f4f4]' : 'bg-[#e8f4fd]') : ''}
                    `}
                    style={{ fontVariationSettings: "'wdth' 100" }}
                    onClick={() => handleSelect(option.value)}
                  >
                    {option.label}
                  </div>
                ))
              ) : (
                <div 
                  className={`
                    text-[#999999] font-['Open_Sans:Regular',_sans-serif] font-normal
                    ${isAutoComplete ? 'px-[14px] py-[8px] text-[14px]' : 'px-[5px] py-[3px] text-[11px]'}
                  `}
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  No options available
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </AIFieldTooltip>
  );
}