import React, { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
};

export const OtherComponent = forwardRef<HTMLDivElement, Props>(
  function OtherComponent({ children }, ref) {
    return <div ref={ref}>{children}</div>;
  }
);
