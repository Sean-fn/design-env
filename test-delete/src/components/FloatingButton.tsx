import React from "react";

interface FloatingButtonProps {
  text?: string;
  icon?: string;
  onClick?: () => void;
  position?: 'standalone' | 'left' | 'right' | 'middle';
  isDemo?: boolean;
}

export default function FloatingButton({ 
  text,
  icon,
  onClick, 
  position = 'standalone',
  isDemo = false
}: FloatingButtonProps) {
  // 根據位置決定圓角樣式
  const getRoundedClass = () => {
    switch (position) {
      case 'left':
        return 'rounded-bl-[25px] rounded-tl-[25px]';
      case 'right':
        return 'rounded-br-[25px] rounded-tr-[25px]';
      case 'middle':
        return '';
      case 'standalone':
      default:
        return 'rounded-[25px]';
    }
  };

  // 根據位置決定陰影框的圓角樣式
  const getShadowRoundedClass = () => {
    switch (position) {
      case 'left':
        return 'rounded-bl-[25.5px] rounded-tl-[25.5px]';
      case 'right':
        return 'rounded-br-[25.5px] rounded-tr-[25.5px]';
      case 'middle':
        return '';
      case 'standalone':
      default:
        return 'rounded-[25.5px]';
    }
  };

  // 根據位置決定 padding（組合時使用較小的 padding）
  const getPaddingClass = () => {
    return position === 'standalone' ? 'px-[50px]' : 'px-[30px]';
  };

  return (
    <button
      className={`bg-[#26a69a] ${isDemo ? 'relative' : 'fixed bottom-[40px] left-1/2 transform -translate-x-1/2'} h-[32px] w-[128px] hover:bg-[#239488] active:bg-[#1f8275] transition-colors cursor-pointer ${isDemo ? 'z-10' : 'z-50'} ${getRoundedClass()}`}
      onClick={onClick}
      type="button"
    >
      <div 
        aria-hidden="true" 
        className={`absolute border border-[#26a69a] border-solid inset-[-0.5px] pointer-events-none shadow-[0px_0px_26px_0px_#26af9c] ${getShadowRoundedClass()}`} 
      />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[7px] relative size-full">
          {icon && <i className={`${icon} text-white text-[12px]`}></i>}
          {text && <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            {text}
          </p>}
        </div>
      </div>
    </button>
  );
}