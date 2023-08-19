import React, { PropsWithChildren } from "react";

export interface FooterProps {
  className: string;
  copyright: string;
}

export default function Footer(props: PropsWithChildren<FooterProps>) {
  return (
    <footer className={props.className}>
      <span>{props.copyright}</span>
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}
      >
        {props.children}
      </div>
    </footer>
  );
}
