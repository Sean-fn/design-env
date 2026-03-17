import React, { useState } from "react";

interface TooltipProps {
  content: string;
  children?: React.ReactNode;
  // If visible is provided, it controls the visibility state (controlled mode)
  // Otherwise, it behaves as an uncontrolled hover tooltip
  visible?: boolean; 
}

export default function Tooltip({ content, children, visible }: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine visibility: if controlled (visible prop is boolean), use that. Else use hover state.
  const isVisible = typeof visible === 'boolean' ? visible : isHovered;

  return (
    <div 
      className="relative inline-flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isVisible && (
        <div className="absolute bottom-[calc(100%+8px)] flex flex-col items-center z-50 opacity-90 transition-opacity duration-200">
          {/* Content Box */}
          <div className="bg-[#333333] rounded-[2px] px-[8px] py-[4px] max-w-[200px] shadow-sm">
            <p 
              className="font-['Open_Sans',sans-serif] text-[12px] text-white text-center leading-[17px] whitespace-nowrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {content}
            </p>
          </div>
          
          {/* Beak (Triangle) */}
          <div className="w-[10px] h-[5px] text-[#333333]">
            <svg 
              className="block w-full h-full" 
              viewBox="0 0 10 5" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <path d="M0 0H10L5 5L0 0Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      )}
      
      {children}
    </div>
  );
}
