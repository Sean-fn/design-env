import React, { useState } from 'react';

export interface TabItem {
  id: string;
  label: string;
  hasError?: boolean;
  hasSettings?: boolean;
}

interface TabProps {
  tabs: TabItem[];
  activeTab?: string;
  onChange?: (tabId: string) => void;
  onSettingsClick?: (tabId: string) => void;
  className?: string;
}

export default function Tab({ tabs, activeTab, onChange, onSettingsClick, className = '' }: TabProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(activeTab || (tabs.length > 0 ? tabs[0].id : ''));
  
  const currentActiveTab = activeTab !== undefined ? activeTab : internalActiveTab;
  
  const handleTabClick = (tabId: string) => {
    if (activeTab === undefined) {
      setInternalActiveTab(tabId);
    }
    onChange?.(tabId);
  };

  const handleSettingsClick = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    onSettingsClick?.(tabId);
  };

  return (
    <div className={`inline-flex gap-0 ${className}`}>
      {tabs.map((tab) => {
        const isActive = currentActiveTab === tab.id;
        const hasError = tab.hasError || false;
        const hasSettings = tab.hasSettings || false;
        
        // 決定樣式
        let textColor = '#888888'; // Default
        let fontWeight = 'font-normal'; // Default
        let showTopLine = false;
        
        if (isActive && hasError) {
          // Active Error
          textColor = '#f3565d';
          fontWeight = 'font-bold';
          showTopLine = false;
        } else if (isActive && !hasError) {
          // Active
          textColor = '#333333';
          fontWeight = 'font-bold';
          showTopLine = true;
        } else if (!isActive && hasError) {
          // Inactive Error
          textColor = '#f3565d';
          fontWeight = 'font-normal';
          showTopLine = false;
        }
        
        return (
          <div
            key={tab.id}
            className={`box-border content-stretch flex flex-row h-[30px] items-center justify-center ${hasSettings ? 'min-w-[134px]' : 'min-w-[110px]'} p-0 relative cursor-pointer hover:opacity-80 transition-opacity`}
            onClick={() => handleTabClick(tab.id)}
            data-name="Tab/Single Tab"
          >
            {/* Container */}
            <div className="box-border content-stretch flex flex-row items-center justify-center min-w-[110px] px-3.5 py-0 relative shrink-0">
              <div
                className={`font-['Open_Sans:${fontWeight === 'font-bold' ? 'Bold' : 'Regular'}',_sans-serif] ${fontWeight} leading-[0] relative shrink-0 text-[14px] text-center text-nowrap`}
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  color: textColor
                }}
              >
                <p className="block leading-[1.42] whitespace-pre">{tab.label}</p>
              </div>
            </div>
            
            {/* Settings Button */}
            {hasSettings && (
              <div
                className="bg-neutral-200 box-border content-stretch flex flex-row gap-[3px] h-[30px] items-center justify-center overflow-clip px-2.5 py-1 relative shrink-0 w-6 hover:bg-neutral-300 transition-colors"
                onClick={(e) => handleSettingsClick(e, tab.id)}
                data-name="Solid Button"
              >
                <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0">
                    <div className="leading-[0] not-italic relative shrink-0 text-[#aaaaaa] text-[14px] text-center text-nowrap">
                      <i className="fas fa-sliders-h"></i>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Top Line for Active state (non-error) */}
            {showTopLine && (
              <div className="absolute h-0 left-0 right-0 top-0.5">
                <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox={`0 0 ${hasSettings ? '134' : '110'} 2`}
                  >
                    <line
                      stroke="#888888"
                      strokeWidth="2"
                      x2={hasSettings ? "134" : "110"}
                      y1="1"
                      y2="1"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}