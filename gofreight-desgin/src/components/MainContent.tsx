import React from "react";

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main 
      className="min-h-screen bg-[#f1f3fa] mb-[40px] pb-[40px]"
    >
      {children}
    </main>
  );
}