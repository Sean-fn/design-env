import React from "react";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export default function Checkbox({ 
  label, 
  checked, 
  onChange, 
  disabled = false,
  className = ""
}: CheckboxProps) {
  return (
    <div
      className={`content-stretch flex gap-[4px] items-center relative shrink-0 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      data-name="Checkbox"
      onClick={disabled ? undefined : () => onChange(!checked)}
    >
      {/* Custom Checkbox SVG - Square shape */}
      <div className="relative shrink-0 size-[15px]" data-name="checkbox-input">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <g>
            <rect fill="white" height="14" width="14" x="0.5" y="0.5" />
            <rect height="14" stroke="#C6C6C6" width="14" x="0.5" y="0.5" />
            {checked && (
              <path d="M5.66772 12.4836L1.87186 8.68771L3.09755 7.46202L5.6325 9.99697L12.0945 3.53495L13.3554 4.79587L5.66772 12.4836Z" fill="#666666" />
            )}
          </g>
        </svg>
      </div>
      {/* Label Text - Only render if label exists */}
      {label && (
        <p 
          className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[12px] text-nowrap" 
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {label}
        </p>
      )}
    </div>
  );
}