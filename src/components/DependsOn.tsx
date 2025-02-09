import React from "react";

export function DependsOn({
  dependents,
  children,
  as = React.Fragment,
}: {
  children: React.ReactNode[];
  dependents: unknown[];
  as?: React.ElementType;
}) {
  if (!dependents.every(Boolean)) return null;
  const As = as;
  return <As>{children}</As>;
}
