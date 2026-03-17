import React, { useState } from "react";
import PortletTitle from "./PortletTitle";
import svgPaths from "../imports/svg-wtcrsqcnyk";

interface PortletContainerProps {
  title?: string;
  statusLabel?: string;
  children?: React.ReactNode;
  showSubtitle?: boolean;
  subtitleText?: string;
  documentCount?: number;
  variant?: 'default' | 'hbl';
  onToolsClick?: () => void;
  onRemove?: () => void;
  defaultCollapsed?: boolean;
  hideTitle?: boolean;
  className?: string;
  onCollapseToggle?: (collapsed: boolean) => void;
}

function MemoSubtitle({ 
  subtitleText = "Memo", 
  documentCount = 99,
  onDocumentClick 
}: { 
  subtitleText?: string; 
  documentCount?: number;
  onDocumentClick?: () => void;
}) {
  return (
    <div className="h-8 relative shrink-0 w-full min-w-0" data-name="MB/L Subtitle">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-8 items-center justify-between px-2.5 py-[5px] relative w-full min-w-0">
          <div className="absolute bg-[#e0e0e0] inset-0" data-name="Rectangle" />
          <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative shrink-0 min-w-0">
            <div
              className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative text-[#3a3a3a] text-[15px] text-left truncate min-w-0"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="block leading-[17px] truncate">{subtitleText}</p>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
            <div 
              className="bg-[#ffffff] relative shrink-0 cursor-pointer hover:bg-gray-50"
              onClick={onDocumentClick}
            >
              <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start overflow-clip px-2.5 py-1 relative">
                <div
                  className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left hidden sm:block"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p className="block leading-[normal] whitespace-pre">Document ({documentCount})</p>
                </div>
                <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-3.5">
                  <i className="fas fa-external-link-alt text-[#3a3a3a] text-[14px]"></i>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute border border-[#3a3a3a] border-solid inset-0 pointer-events-none"
              />
            </div>
            <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
              <i className="fas fa-angle-up text-[#c6c6c6] text-[16px]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortletContainer({
  title = "MB/L  1LAX14115152",
  statusLabel = "Not Submitted",
  children,
  showSubtitle = true,
  subtitleText = "Memo",
  documentCount = 99,
  variant = 'default',
  onToolsClick,
  onRemove,
  defaultCollapsed = false,
  hideTitle = false,
  className = "",
  onCollapseToggle
}: PortletContainerProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const handleToggleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onCollapseToggle?.(newState);
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove();
    }
  };

  const getPortletType = () => {
    // For HBL variant, always show collapse/close icon, never remove icon
    if (variant === 'hbl') {
      return isCollapsed ? 'close' : 'collapse';
    }
    // For default variant, show remove icon if onRemove is provided
    if (onRemove) return 'remove';
    return isCollapsed ? 'close' : 'collapse';
  };

  const handleActionClick = () => {
    // For HBL variant, always toggle collapse, never remove
    if (variant === 'hbl') {
      handleToggleCollapse();
    } else if (onRemove) {
      // For default variant with onRemove, execute remove
      handleRemove();
    } else {
      // Otherwise, toggle collapse
      handleToggleCollapse();
    }
  };

  // HBL variant: yellow border (#f3c200), default: gray border (#555555)
  const borderColor = variant === 'hbl' ? 'border-[#f3c200]' : 'border-[#555555]';

  return (
    <div
      className={`bg-neutral-100 box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full border ${borderColor} border-solid min-w-0 ${className}`}
      data-name="MB/L Container"
    >
      
      {/* Portlet Title */}
      {!hideTitle && (
        <PortletTitle
          title={title}
          statusLabel={statusLabel}
          type={getPortletType()}
          variant={variant}
          onToolsClick={onToolsClick}
          onActionClick={handleActionClick}
        />
      )}
      
      {/* Collapsible Content */}
      {!isCollapsed && (
        <div className="w-full min-w-0">
          {/* Main Content Area */}
          <div className="min-h-[80px] relative shrink-0 w-full overflow-x-auto" data-name="MB/L Content">
            <div className="relative size-full min-w-0">
              {children || <div className="min-h-[80px] w-full bg-[rgba(245,245,245,1)] p-4 overflow-auto" />}
            </div>
          </div>
          
          {/* Subtitle/Memo Section */}
          {showSubtitle && (
            <div
              className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full min-w-0"
              data-name="Memo"
            >
              <MemoSubtitle 
                subtitleText={subtitleText} 
                documentCount={documentCount}
                onDocumentClick={() => console.log('Document clicked')}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}