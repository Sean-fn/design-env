import React from "react";

type AlertVariant = "success" | "error" | "info";

interface ToastAlertProps {
  variant?: AlertVariant;
  message: string;
  onClose?: () => void;
  className?: string;
}

export default function ToastAlert({ 
  variant = "info", 
  message, 
  onClose, 
  className = "" 
}: ToastAlertProps) {
  
  const variantStyles = {
    success: {
      bg: "bg-[#dff0d8]",
      border: "border-[#d6e9c6]",
      text: "text-[#3c763d]"
    },
    error: {
      bg: "bg-[#f2dede]",
      border: "border-[#f0c7c6]",
      text: "text-[#a94442]"
    },
    info: {
      bg: "bg-[#d9edf7]",
      border: "border-[#b8ddf8]",
      text: "text-[#38404f]"
    }
  };

  const style = variantStyles[variant];

  return (
    <div className={`${style.bg} border ${style.border} relative w-full rounded-[2px] ${className}`}>
      <div className="box-border flex items-start pl-[15px] pr-[35px] py-[15px] min-h-[48px]">
        <p className={`font-['Open_Sans'] text-[13px] ${style.text} leading-normal m-0`}>
          {message}
        </p>
        
        <button 
          onClick={onClose}
          className="absolute right-[14px] top-[14px] leading-none bg-transparent border-none p-0 cursor-pointer group"
          aria-label="Close"
        >
          <i className="fas fa-times text-[#c6c6c6] text-[14px] group-hover:text-[#999999] transition-colors"></i>
        </button>
      </div>
    </div>
  );
}
