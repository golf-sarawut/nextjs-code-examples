"use client";
import React, { useRef, ElementRef } from "react";
import { OtherComponent } from "./otherComponent";

type OtherComponentRef = ElementRef<typeof OtherComponent>;

export const Component = () => {
  const ref = useRef<OtherComponentRef>(null);
  return <OtherComponent ref={ref}>Hello</OtherComponent>;
};
