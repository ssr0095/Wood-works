import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-svh flex items-center justify-center absolute top-0 left-0 z-[100] bg-background">
      <div className="relative inline-flex">
        <div className="size-16 rounded-full bg-primary" />
        <div className="absolute left-0 top-0 size-16 animate-ping rounded-full bg-primary" />
        <div className="absolute left-0 top-0 size-16 animate-pulse rounded-full bg-primary" />
      </div>
    </div>
  );
};

export default Loading;
