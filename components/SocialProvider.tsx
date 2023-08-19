import React from "react";
import { useEffect } from "react";

export interface SocialProviderProps {
  className?: string;
  containerId?: string;
  feedId?: string;
}

export default function SocialProvider({
  className,
  containerId,
  feedId,
}: SocialProviderProps) {
  useEffect(() => {
    var i,
      e,
      d = document,
      s = "script";
    i = d.createElement("script");
    i.async = true;
    i.charset = "UTF-8";
    i.src = `https://cdn.curator.io/published/${feedId}.js`;
    e = d.getElementsByTagName(s)[0];
    e.parentNode?.insertBefore(i, e);
    console.log("Curator initialized");
  }, [feedId]);
  return (
    <div className={className}>
      <div id={containerId}></div>
    </div>
  );
}
