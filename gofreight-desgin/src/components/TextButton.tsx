import React from "react";

interface TextButtonProps {
  icon?: string;
  iconColor?: string;
  text?: string;
  onClick?: () => void;
  variant?: 'default' | 'solid';
  iconPosition?: 'left' | 'right';
  className?: string;
}

export default function TextButton({ 
  icon, 
  iconColor, 
  text, 
  onClick, 
  variant = 'default',
  iconPosition = 'left',
  className = ''
}: TextButtonProps) {
  
  // Variant styles
  const variantStyles = {
    default: {
      button: "h-[36px] px-[14px] py-[7px] text-[#333333] hover:text-[#5a9fd4]",
      icon: iconColor || "#333333",
      iconSize: "text-[14px]"
    },
    solid: {
      button: "h-6 px-[8px] py-[3px] bg-[#578ebe] hover:bg-[#4a7ba8] text-white",
      icon: "#ffffff",
      iconSize: "text-[14px]"
    }
  };

  const currentVariant = variantStyles[variant];

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-[8px] transition-colors ${currentVariant.button} ${className}`}
    >
      {icon && iconPosition === 'left' && (
        <div className="content-stretch flex items-center shrink-0">
          <i className={`${icon}`} style={{ color: currentVariant.icon, width: '12px', height: '12px', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></i>
        </div>
      )}
      {text && (
        <p 
          className="font-['Open_Sans:Regular',sans-serif] font-normal shrink-0 text-[14px] text-nowrap whitespace-pre"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {text}
        </p>
      )}
      {icon && iconPosition === 'right' && (
        <div className="content-stretch flex items-center shrink-0">
          <i className={`${icon}`} style={{ color: currentVariant.icon, width: '12px', height: '12px', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></i>
        </div>
      )}
    </button>
  );
}