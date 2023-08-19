import Link from "next/link";
import React from "react";

export interface NavLinkProps {
  className: string;
  path: string;
  label: string;
}

export default function NavLink({ className, path, label }: NavLinkProps) {
  return (
    <Link className={className} href={path}>
      {label}
    </Link>
  );
}
