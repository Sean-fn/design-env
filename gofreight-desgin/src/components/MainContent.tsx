import React from "react";

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main 
      className="ml-[45px] pl-[16px] min-h-screen bg-[#f1f3fa] mt-[0px] mr-[0px] mb-[40px] pt-[0px] pr-[0px] pb-[40px]"
    >
      {children}
    </main>
  );
}