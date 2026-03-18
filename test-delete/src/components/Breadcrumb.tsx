import React from "react";

// 定義麵包屑項目的介面
interface BreadcrumbItem {
  label: string;
  path?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  currentPage: string;
  // 未來可以添加自訂路徑的支援
  customPath?: BreadcrumbItem[];
  /** Optional action button shown after the last breadcrumb item */
  actionButton?: { label: string; onClick: () => void };
}

export default function Breadcrumb({ currentPage, customPath, actionButton }: BreadcrumbProps) {
  const getPageTitle = (page: string) => {
    switch(page) {
      case 'dashboard':
        return 'Dashboard';
      case 'ocean-import-list':
        return 'My Shipment List';
      case 'new-shipment':
        return 'New Shipment';
      case 'ai-shipment-review':
        return 'AI Shipment Review';
      case 'shipment':
        return 'New Shipment';
      case 'design-system':
        return 'Design System';
      case 'ocean-import':
        return 'Ocean Import';
      case 'ocean-export':
        return 'Ocean Export';
      case 'air-import':
        return 'Air Import';
      case 'air-export':
        return 'Air Export';
      case 'truck':
        return 'Truck';
      case 'misc':
        return 'Misc';
      case 'warehouse':
        return 'Warehouse';
      case 'calculator':
        return 'Accounting';
      case 'sales':
        return 'Sales';
      case 'trade-partner':
        return 'Trade Partner';
      case 'reports':
        return 'Reports';
      case 'documents':
        return 'Documents';
      case 'approval-center':
        return 'Approval Center';
      case 'settings':
        return 'Settings';
      case 'useful-links':
        return 'Useful Links';
      case 'import-shipment':
        return 'Import Shipment';
      default:
        return 'Dashboard';
    }
  };

  // 未來可以根據 currentPage 定義多層級路徑
  const getDefaultBreadcrumbPath = (page: string): BreadcrumbItem[] => {
    // 特定頁面的多層級路徑
    if (page === 'ocean-import-list') {
      return [
        {
          label: 'Home',
          path: '/',
          icon: <i className="fas fa-home text-[#c6c6c6] text-[14px]"></i>
        },
        {
          label: 'Ocean Import',
          path: '/ocean-import'
        },
        {
          label: 'My Shipment List'
        }
      ];
    }
    
    if (page === 'shipment' || page === 'new-shipment') {
      return [
        {
          label: 'Home',
          path: '/',
          icon: <i className="fas fa-home text-[#c6c6c6] text-[14px]"></i>
        },
        {
          label: 'Ocean Import',
          path: '/ocean-import'
        },
        {
          label: 'New Shipment'
        }
      ];
    }
    
    if (page === 'ai-shipment-review') {
      return [
        {
          label: 'Home',
          path: '/',
          icon: <i className="fas fa-home text-[#c6c6c6] text-[14px]"></i>
        },
        {
          label: 'Ocean Import',
          path: '/ocean-import'
        },
        {
          label: 'AI Shipment Review'
        }
      ];
    }

    if (page === 'ai-create') {
      return [
        {
          label: 'Home',
          path: '/',
          icon: <i className="fas fa-home text-[#c6c6c6] text-[14px]"></i>
        },
        {
          label: 'Ocean Import',
          path: '/ocean-import'
        },
        {
          label: 'New Shipment'
        }
      ];
    }

    if (page === 'ai-invoice') {
      return [
        {
          label: 'Home',
          path: '/',
          icon: <i className="fas fa-home text-[#c6c6c6] text-[14px]"></i>
        },
        {
          label: 'Accounting',
          path: '/accounting'
        },
        {
          label: 'Invoice',
          path: '/invoice'
        },
        {
          label: 'Invoice (A/P) - NP-277073'
        }
      ];
    }
    
    // 目前所有頁面都是兩層級：Home -> 當前頁面
    return [
      {
        label: 'Home',
        path: '/',
        icon: <i className="fas fa-home text-[#c6c6c6] text-[14px]"></i>
      },
      {
        label: getPageTitle(page)
      }
    ];
  };

  // 使用自訂路徑或預設路徑
  const breadcrumbItems = customPath || getDefaultBreadcrumbPath(currentPage);

  // 渲染麵包屑項目
  const renderBreadcrumbItems = () => {
    return breadcrumbItems.map((item, index) => {
      const isLast = index === breadcrumbItems.length - 1;
      
      return (
        <div key={index} className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            {item.icon && item.icon}
            <span>{item.label}</span>
          </div>
          
          {/* 如果不是最後一個項目，顯示分隔符 */}
          {!isLast && (
            <i className="fas fa-angle-right text-[#c6c6c6] text-[14px]"></i>
          )}
        </div>
      );
    });
  };

  return (
    <div className="bg-transparent ml-[45px] mt-[46px] px-[16px] py-[8px] mr-[0px] mb-[8px]">
      <div className="flex items-center gap-1 text-[12px] text-[#888888]">
        {renderBreadcrumbItems()}
        {actionButton && (
          <button
            onClick={actionButton.onClick}
            className="ml-[6px] text-[12px] text-[#428bca] hover:underline cursor-pointer whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            [{actionButton.label}]
          </button>
        )}
      </div>
    </div>
  );
}