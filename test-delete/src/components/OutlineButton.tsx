import React from "react";

interface OutlineButtonProps {
  icon?: string;
  text?: string;
  onClick?: () => void;
  rounded?: boolean;
  size?: 'large' | 'medium' | 'small';
  iconPosition?: 'left' | 'right';
}

const sizeStyles = {
  large: {
    height: 'h-[33px]',
    padding: 'px-[14px] py-[7px]',
    fontSize: 'text-[14px]',
    iconSize: 'text-[14px]',
  },
  medium: {
    height: 'h-[26px]',
    padding: 'px-[10px] py-[4px]',
    fontSize: 'text-[12px]',
    iconSize: 'text-[12px]',
  },
  small: {
    height: 'h-[20px]',
    padding: 'px-[8px] py-[2px]',
    fontSize: 'text-[11px]',
    iconSize: 'text-[11px]',
  },
};

export default function OutlineButton({ icon, text, onClick, rounded = false, size = 'large', iconPosition = 'left' }: OutlineButtonProps) {
  const sizeStyle = sizeStyles[size];
  
  return (
    <button
      onClick={onClick}
      className={`bg-white ${sizeStyle.height} flex items-center ${sizeStyle.padding} gap-[3px] border border-[#c6c6c6] hover:bg-[#f5f5f5] transition-colors relative ${rounded ? 'rounded-[50px]' : ''}`}
    >
      {icon && iconPosition === 'left' && (
        <div className="content-stretch flex items-center shrink-0">
          <i className={`${icon} text-[#333333] ${sizeStyle.iconSize}`}></i>
        </div>
      )}
      {text && (
        <p 
          className={`font-['Open_Sans:Regular',sans-serif] font-normal shrink-0 text-[#333333] ${sizeStyle.fontSize} text-nowrap whitespace-pre`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {text}
        </p>
      )}
      {icon && iconPosition === 'right' && (
        <div className="content-stretch flex items-center shrink-0">
          <i className={`${icon} text-[#333333] ${sizeStyle.iconSize}`}></i>
        </div>
      )}
    </button>
  );
}