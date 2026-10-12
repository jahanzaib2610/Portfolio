"use client";

import { BrandScroller, BrandScrollerReverse } from "@/components/ui/brand-scoller";

export const DemoOne = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <BrandScroller />
      <BrandScrollerReverse />
    </div>
  );
};

export default DemoOne;
