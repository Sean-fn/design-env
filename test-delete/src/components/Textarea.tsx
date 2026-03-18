import React, { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-s5u3tp28ik";

interface TextareaProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  className?: string;
  resizable?: boolean;
}

function ResizeIcon() {
  return (
    <div className="content-stretch flex h-[2px] items-end justify-end relative shrink-0 w-full" data-name="resize icon">
      <div className="relative shrink-0 size-[6.1px]" data-name="Resizer">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <path d={svgPaths.p11a9ba00} fill="var(--fill-0, #333333)" id="Resizer" />
        </svg>
      </div>
    </div>
  );
}

export default function Textarea({
  value = "",
  onChange,
  placeholder = "Input text here....",
  rows = 4,
  disabled = false,
  className = "",
  resizable = true,
}: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className={`relative w-full ${disabled ? 'bg-[#f5f5f5]' : 'bg-white'} ${className}`} data-name="Textarea">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="relative shrink-0 w-full" data-name="padding - 2px 5px">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start pb-0 pt-[2px] px-[5px] relative w-full">
              <textarea
                ref={textareaRef}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                disabled={disabled}
                className={`font-['Open_Sans:Regular',sans-serif] font-normal leading-[15.4px] relative shrink-0 text-[11px] w-full bg-transparent border-none outline-none resize-none p-0 ${disabled ? 'text-[#999999] cursor-not-allowed' : 'text-[#333]'}`}
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  resize: resizable ? 'vertical' : 'none',
                }}
              />
            </div>
          </div>
        </div>
        {resizable && !disabled && <ResizeIcon />}
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
    </div>
  );
}
