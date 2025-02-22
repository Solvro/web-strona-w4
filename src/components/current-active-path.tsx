import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

type Path = (
  | {
      name: string;
      destination?: string;
    }
  | string
)[];

export function CurrentActivePath({
  path,
  className,
}: {
  path: Path;
  className?: string;
}) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">
              <HomeIcon className="size-5 shrink-0" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        {path.map((part, index) => (
          <Fragment key={typeof part === "string" ? part : part.name}>
            <BreadcrumbItem>
              {typeof part !== "string" && part.destination !== undefined ? (
                <BreadcrumbLink asChild>
                  <Link href={part.destination}>{part.name}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>
                  {typeof part === "string" ? part : part.name}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < path.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
