import { cn } from "@/src/utils/cn";
import React from "react";

const Content = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("w-full px-12 py-8", className)}>{children}</div>;
};

export default Content;
