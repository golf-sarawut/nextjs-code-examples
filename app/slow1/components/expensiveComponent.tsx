"use client"
import React from 'react';

export const ExpensiveComponent = () => {
  const startTime = performance.now();
  while (performance.now() - startTime < 100) {
  }

  return <div></div>;
}
