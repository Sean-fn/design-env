import React, { useState } from 'react';

interface AIFilledInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  isAIFilled?: boolean;
  confidence?: number; // 0-100
  placeholder?: string;
  required?: boolean;
}

export default function AIFilledInput({
  label,
  value,
  onChange,
  isAIFilled = false,
  confidence,
  placeholder,
  required = false
}: AIFilledInputProps) {
  const [isTouched, setIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const showAIIndicator = isAIFilled && !isTouched;

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
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setIsTouched(true);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`
            w-full px-[8px] py-[6px] text-[13px]
            font-['Open_Sans:Regular',sans-serif]
            border border-solid
            transition-all duration-200
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
        />
        {showAIIndicator && (
          <div className="absolute right-[8px] top-1/2 -translate-y-1/2 text-[#f0ad4e] text-[10px] pointer-events-none">
            <i className="fa-solid fa-sparkles"></i>
          </div>
        )}
      </div>
    </div>
  );
}