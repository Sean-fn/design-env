import React, { useState } from "react";
import imgImage1 from "figma:asset/990143031a998ce15e76042137358ec63c796c2c.png";
import imgImage107 from "figma:asset/76d6cb7a5b085878b021efb79031396ee72fe356.png";
import imgImage108 from "figma:asset/82efda2d35c308b75fd3b2659fdc06101cda1960.png";
import imgImage109 from "figma:asset/592d28a689947cbb83b7333c37ce2a8ddf72d1b6.png";
import svgPaths from "../imports/svg-wbsa5c2v6m";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  isExpanded: boolean;
  onClick?: () => void;
}

export function SidebarItem({ icon, label, isActive = false, hasSubmenu = false, isExpanded, onClick }: SidebarItemProps) {
  return (
    <div
      className={`${
        isActive 
          ? 'bg-[#1caf9a]' 
          : 'bg-[#364150] hover:bg-[#2c3542]'
      } ${isExpanded ? 'w-[235px]' : 'w-[45px]'} h-[45px] flex items-center border-t border-[#3d4957] relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer group`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between w-full px-[15px] py-2.5">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 flex items-center justify-center shrink-0">
            {/* Update icon colors based on state */}
            <div className={isActive ? 'text-white' : 'text-[#c8ced6] group-hover:text-white'}>
              {icon}
            </div>
          </div>
          {isExpanded && (
            <div 
              className={`font-['Open_Sans:Regular',_sans-serif] font-normal text-[14px] text-left whitespace-nowrap opacity-0 ${isExpanded ? 'animate-fade-in opacity-100' : ''} ${
                isActive ? 'text-white' : 'text-[#c8ced6] group-hover:text-white'
              } transition-colors duration-200`}
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {label}
            </div>
          )}
        </div>
        {isExpanded && hasSubmenu && (
          <div className={`text-[14px] opacity-0 animate-fade-in transition-colors duration-200 ${
            isActive ? 'text-white' : 'text-[#606c7d] group-hover:text-white'
          }`}>
            <i className="fas fa-angle-left"></i>
          </div>
        )}
      </div>
    </div>
  );
}

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

interface MenuItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  hasSubmenu: boolean;
  submenuItems?: { id: string; label: string }[];
}

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      icon: <i className="fas fa-home text-[16px]"></i>,
      label: "Dashboard",
      hasSubmenu: false
    },
    // Design System button hidden
    // {
    //   id: 'design-system',
    //   icon: <i className="fas fa-book-bible text-[16px]"></i>,
    //   label: "Design System",
    //   hasSubmenu: false
    // },
    {
      id: 'ocean-import',
      icon: <div className="bg-center bg-cover bg-no-repeat size-5" style={{ backgroundImage: `url('${imgImage1}')` }} />,
      label: "Ocean Import",
      hasSubmenu: true,
      submenuItems: [
        { id: 'ocean-import-list', label: 'My Shipment List' },
        { id: 'new-shipment', label: 'New Shipment' }
      ]
    },
    {
      id: 'ocean-export',
      icon: <div className="bg-center bg-cover bg-no-repeat size-5" style={{ backgroundImage: `url('${imgImage107}')` }} />,
      label: "Ocean Export",
      hasSubmenu: true
    },
    {
      id: 'air-import',
      icon: <div className="bg-center bg-cover bg-no-repeat size-5" style={{ backgroundImage: `url('${imgImage108}')` }} />,
      label: "Air Import",
      hasSubmenu: true
    },
    {
      id: 'air-export',
      icon: <div className="bg-center bg-cover bg-no-repeat size-5" style={{ backgroundImage: `url('${imgImage109}')` }} />,
      label: "Air Export",
      hasSubmenu: true
    },
    {
      id: 'truck',
      icon: <i className="fas fa-truck text-[16px]"></i>,
      label: "Truck",
      hasSubmenu: true
    },
    {
      id: 'misc',
      icon: <i className="fas fa-cubes text-[16px]"></i>,
      label: "Misc",
      hasSubmenu: true
    },
    {
      id: 'warehouse',
      icon: (
        <div className="h-[15.597px] w-4">
          <svg
            className="block size-full transition-colors duration-200"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
          >
            <g clipPath="url(#clip0_1_1378)">
              <g>
                <path
                  clipRule="evenodd"
                  d={svgPaths.p153d0b00}
                  fill="currentColor"
                  fillRule="evenodd"
                />
                <path d={svgPaths.p179dee00} fill="currentColor" />
                <path d={svgPaths.pe8ca100} fill="currentColor" />
                <path d={svgPaths.pefc0c00} fill="currentColor" />
                <path d={svgPaths.p34a33b00} fill="currentColor" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_1378">
                <rect fill="white" height="15.5973" width="16" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
      label: "Warehouse",
      hasSubmenu: true
    },
    {
      id: 'calculator',
      icon: <i className="fas fa-calculator text-[16px]"></i>,
      label: "Accounting",
      hasSubmenu: true
    },
    {
      id: 'sales',
      icon: <i className="fas fa-briefcase text-[16px]"></i>,
      label: "Sales",
      hasSubmenu: true
    },
    {
      id: 'trade-partner',
      icon: <i className="fas fa-users text-[16px]"></i>,
      label: "Trade Partner",
      hasSubmenu: true
    },
    {
      id: 'reports',
      icon: <i className="fas fa-chart-bar text-[16px]"></i>,
      label: "Reports",
      hasSubmenu: true
    },
    {
      id: 'documents',
      icon: <i className="fas fa-file-alt text-[16px]"></i>,
      label: "Documents",
      hasSubmenu: true
    },
    {
      id: 'approval-center',
      icon: <i className="fas fa-book text-[16px]"></i>,
      label: "Approval Center",
      hasSubmenu: false
    },
    {
      id: 'settings',
      icon: <i className="fas fa-cog text-[16px]"></i>,
      label: "Settings",
      hasSubmenu: true
    },
    {
      id: 'useful-links',
      icon: <i className="fas fa-link text-[16px]"></i>,
      label: "Useful Links",
      hasSubmenu: true
    },
    {
      id: 'import-shipment',
      icon: (
        <div className="h-[15.424px] w-4">
          <svg
            className="block size-full transition-colors duration-200"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
          >
            <g clipPath="url(#clip0_1_1335)">
              <g>
                <path d={svgPaths.p2552e700} fill="currentColor" />
                <path d={svgPaths.p22beb100} fill="currentColor" />
                <path d={svgPaths.p17a5fc80} fill="currentColor" />
                <path d={svgPaths.pbcec4c0} fill="currentColor" />
                <path d={svgPaths.p6ef4c00} fill="currentColor" />
                <path d={svgPaths.p9be3f00} fill="currentColor" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_1335">
                <rect fill="white" height="15.4236" width="16" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
      label: "Import Shipment",
      hasSubmenu: false
    }
  ];

  const handleItemClick = (itemId: string) => {
    const item = menuItems.find(i => i.id === itemId);
    if (item?.hasSubmenu) {
      setExpandedSubmenu(expandedSubmenu === itemId ? null : itemId);
    } else {
      onPageChange(itemId);
    }
  };

  const handleSubmenuClick = (submenuId: string) => {
    onPageChange(submenuId);
  };

  return (
    <aside 
      className={`bg-[#364150] ${isExpanded ? 'w-[235px]' : 'w-[45px]'} h-[calc(100vh-46px)] fixed left-0 top-[46px] z-20 transition-all duration-300 ease-in-out overflow-y-auto overflow-x-hidden scrollbar-hide`}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => {
        setIsExpanded(false);
        setExpandedSubmenu(null);
      }}
    >
      <div className="flex flex-col">
        {menuItems.map((item) => (
          <div key={item.id}>
            <SidebarItem
              icon={item.icon}
              label={item.label}
              isActive={currentPage === item.id || (item.submenuItems?.some(sub => sub.id === currentPage) ?? false)}
              hasSubmenu={item.hasSubmenu}
              isExpanded={isExpanded}
              onClick={() => handleItemClick(item.id)}
            />
            
            {/* Submenu */}
            {item.submenuItems && expandedSubmenu === item.id && isExpanded && (
              <div className="bg-[#2c3542]">
                {item.submenuItems.map((subItem) => (
                  <div
                    key={subItem.id}
                    className={`${
                      currentPage === subItem.id
                        ? 'bg-[#1caf9a]'
                        : 'bg-[#2c3542] hover:bg-[#252d38]'
                    } h-[40px] flex items-center border-t border-[#3d4957] cursor-pointer transition-colors duration-200`}
                    onClick={() => handleSubmenuClick(subItem.id)}
                  >
                    <div className="flex items-center w-full pl-12 pr-4">
                      <div 
                        className={`font-['Open_Sans:Regular',_sans-serif] font-normal text-[13px] text-left whitespace-nowrap ${
                          currentPage === subItem.id ? 'text-white' : 'text-[#c8ced6] hover:text-white'
                        } transition-colors duration-200`}
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        {subItem.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}