import Spline from "@splinetool/react-spline";
import React from "react";

export interface LoaderProps {
  className?: string;
}

export default function Loader({ className }: LoaderProps) {
  return (
    <div className={className}>
      <Spline scene="https://prod.spline.design/ry0CEQB0-u7Ruj29/scene.splinecode" />
    </div>
  );
}
