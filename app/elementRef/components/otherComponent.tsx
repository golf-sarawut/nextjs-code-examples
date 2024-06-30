import React, { forwardRef } from "react";

type Props = React.ComponentPropsWithoutRef<"div">;

export const OtherComponent = forwardRef<HTMLDivElement, Props>(
  function OtherComponent({ children, ...props }, ref) {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  }
);
