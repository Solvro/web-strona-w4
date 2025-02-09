import React from "react";

export function DependsOn<As extends React.ElementType = "div">({
  dependents,
  children,
  as,
  ...props
}: {
  children: React.ReactNode[];
  dependents: unknown[];
  as?: As;
} & React.ComponentPropsWithoutRef<As>) {
  if (!dependents.every(Boolean)) return null;
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}
