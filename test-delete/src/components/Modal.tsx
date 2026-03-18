import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'xl';
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'medium'
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const widthClasses = {
    small: 'w-[300px]',
    medium: 'w-[600px]',
    large: 'w-[900px]',
    xl: 'w-[80%]'
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[100px]" data-name="Modal Overlay">
       {/* Backdrop */}
       <div 
         className="absolute inset-0 bg-black/50 transition-opacity" 
         onClick={onClose}
       />
       
       {/* Modal Container */}
       <div 
         ref={modalRef}
         className={`
           relative bg-white flex flex-col shadow-[0px_5px_15px_0px_rgba(0,0,0,0.5)] 
           ${widthClasses[size]} 
           max-h-[calc(100vh-200px)]
           transition-all duration-200 ease-in-out
         `}
         data-name="Modal"
       >
         {/* Header */}
         <div className="bg-white relative shrink-0 w-full" data-name="Header">
           <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
           <div className="flex flex-row justify-between size-full">
             <div className="box-border content-stretch flex items-center justify-between p-[15px] relative w-full">
               <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                 {title}
               </p>
               <div 
                 className="content-stretch flex items-center justify-center relative shrink-0 w-[20px] h-[20px] cursor-pointer hover:opacity-70" 
                 onClick={onClose}
                 data-name="icon-wrapper"
               >
                 <i className="fas fa-times text-[#c6c6c6] text-[14px]" />
               </div>
             </div>
           </div>
         </div>

         {/* Content */}
         <div className="bg-white relative shrink-0 w-full overflow-y-auto" data-name="Content">
           <div className="box-border content-stretch flex flex-col gap-[15px] items-start p-[15px] relative w-full">
             {children}
           </div>
         </div>

         {/* Footer */}
         {footer && (
           <div className="bg-white relative shrink-0 w-full" data-name="Footer">
             <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
             <div className="flex flex-row items-center justify-end size-full">
               <div className="box-border content-stretch flex gap-[10px] items-center justify-end p-[15px] relative w-full">
                 {footer}
               </div>
             </div>
           </div>
         )}
       </div>
    </div>,
    document.body
  );
}
