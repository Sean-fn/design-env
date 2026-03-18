import React from "react";

interface RadioButtonProps {
  label: string;
  checked: boolean;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export default function RadioButton({ 
  label, 
  checked, 
  onClick, 
  disabled = false,
  className = ""
}: RadioButtonProps) {
  return (
    <div 
      className={`content-stretch flex gap-[4px] items-center relative shrink-0 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      data-name="Radio Button"
      onClick={disabled ? undefined : onClick}
    >
      {/* Custom Radio SVG */}
      <div className="relative shrink-0 size-[14px]" data-name="Radio">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g>
            <rect fill="white" height="13" rx="6.5" width="13" x="0.5" y="0.5" />
            <rect height="13" rx="6.5" stroke="#C6C6C6" width="13" x="0.5" y="0.5" />
            {checked && (
              <circle cx="7" cy="7" fill="#666666" r="4" />
            )}
          </g>
        </svg>
      </div>
      {/* Label Text */}
      <p 
        className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[12px] text-nowrap" 
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </p>
    </div>
  );
}
