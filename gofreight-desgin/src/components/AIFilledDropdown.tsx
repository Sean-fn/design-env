import React, { useState } from 'react';

interface AIFilledDropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string; isNew?: boolean }>;
  isAIFilled?: boolean;
  confidence?: number;
  required?: boolean;
  onCreateNew?: () => void;
}

export default function AIFilledDropdown({
  label,
  value,
  onChange,
  options,
  isAIFilled = false,
  confidence,
  required = false,
  onCreateNew
}: AIFilledDropdownProps) {
  const [isTouched, setIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const showAIIndicator = isAIFilled && !isTouched;
  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="flex flex-col gap-[6px] w-full">
      <label className="flex items-center gap-[4px] font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#333]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
        {required && <span className="text-[#d9534f]">*</span>}
        {showAIIndicator && (
          <span className="flex items-center gap-[4px] text-[10px] text-[#f0ad4e] ml-[4px]">
            <i className="fa-solid fa-wand-magic-sparkles text-[10px]"></i>
            AI {confidence && `${confidence}%`}
          </span>
        )}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => {
            if (e.target.value === '__create_new__') {
              onCreateNew?.();
            } else {
              onChange(e.target.value);
              setIsTouched(true);
            }
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-[8px] py-[6px] text-[13px]
            font-['Open_Sans:Regular',sans-serif]
            border border-solid
            transition-all duration-200
            appearance-none
            ${showAIIndicator ? 'border-[#f0ad4e]' : 'bg-white border-[#ccc]'}
            ${isFocused ? 'border-[#26a69a] outline-none' : ''}
            hover:border-[#999]
          `}
          style={{ 
            fontVariationSettings: "'wdth' 100",
            background: showAIIndicator 
              ? 'linear-gradient(164.789deg, rgba(112, 218, 194, 0.15) 0%, rgba(192, 220, 160, 0.15) 50%, rgba(254, 215, 114, 0.15) 100%)'
              : 'white'
          }}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.isNew ? '🆕 ' : ''}{option.label}
            </option>
          ))}
          {onCreateNew && (
            <option value="__create_new__">➕ Create new...</option>
          )}
        </select>
        <div className="absolute right-[8px] top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-[4px]">
          {showAIIndicator && (
            <i className="fa-solid fa-sparkles text-[#f0ad4e] text-[10px]"></i>
          )}
          <i className="fa-solid fa-chevron-down text-[#666] text-[10px]"></i>
        </div>
      </div>
      {selectedOption?.isNew && (
        <div className="text-[11px] text-[#f0ad4e] flex items-center gap-[4px]">
          <i className="fa-solid fa-info-circle"></i>
          This is a new entity detected by AI. Click Save to add it to your system.
        </div>
      )}
    </div>
  );
}