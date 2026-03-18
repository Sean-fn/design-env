import React from "react";
import { Button } from "./ui/button";

interface SolidButtonProps {
  icon?: string;
  text?: string;
  onClick?: () => void;
  rounded?: boolean;
  variant?: 'teal' | 'blue' | 'gray' | 'red' | 'green';
  size?: 'large' | 'medium' | 'small' | 'tiny';
  className?: string;
  customBgColor?: string; // Custom background color override
}

const variantStyles = {
  teal: 'bg-[#26a69a] hover:bg-[#229688]',
  blue: 'bg-[#428bca] hover:bg-[#3071a9]',
  gray: 'bg-[#d3d3d3] hover:bg-[#c3c3c3]',
  red: 'bg-[#e74c3c] hover:bg-[#c0392b]',
  green: 'bg-[#26a69a] hover:bg-[#229688]',
};

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
  tiny: {
    height: 'h-6',
    padding: 'w-6',
    fontSize: 'text-[10px]',
    iconSize: 'text-[10px]',
  },
};

export default function SolidButton({ icon, text, onClick, rounded = false, variant = 'teal', size = 'large', className = '', customBgColor }: SolidButtonProps) {
  const sizeStyle = sizeStyles[size];
  const bgColorClass = customBgColor ? `bg-[${customBgColor}]` : variantStyles[variant];
  
  // For tiny size, use simplified styling (icon-only square button)
  if (size === 'tiny') {
    return (
      <Button
        onClick={onClick}
        className={`${bgColorClass} ${sizeStyle.height} ${sizeStyle.padding} rounded-none ${className}`}
        style={customBgColor ? { backgroundColor: customBgColor } : undefined}
        data-name="Solid Button"
      >
        {icon && (
          <i className={`${icon} text-white ${sizeStyle.iconSize}`}></i>
        )}
      </Button>
    );
  }
  
  return (
    <Button
      onClick={onClick}
      className={`${bgColorClass} ${sizeStyle.height} ${sizeStyle.padding} gap-[3px] ${rounded ? 'rounded-[50px]' : 'rounded-none'} ${className}`}
      style={customBgColor ? { backgroundColor: customBgColor } : undefined}
      data-name="Solid Button"
    >
      {icon && (
        <div className="content-stretch flex items-center shrink-0">
          <i className={`${icon} text-white ${sizeStyle.iconSize}`}></i>
        </div>
      )}
      {text && (
        <p 
          className={`font-['Open_Sans:Regular',sans-serif] font-normal shrink-0 ${sizeStyle.fontSize} text-nowrap whitespace-pre ${customBgColor ? 'text-[#333333]' : 'text-white'}`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {text}
        </p>
      )}
    </Button>
  );
}