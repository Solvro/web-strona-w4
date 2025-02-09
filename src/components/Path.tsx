import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { HomeIcon } from "lucide-react";

type Path = (
  | {
      name: string;
      destination?: string;
    }
  | string
)[];

export function Path({ path, className }: { path: Path; className?: string }) {
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

        {path.map((part, i) => (
          <>
            <BreadcrumbItem key={i}>
              {typeof part !== "string" && part.destination ? (
                <BreadcrumbLink asChild>
                  <Link href={part.destination}>{part.name}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{typeof part === "string" ? part : part.name}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {i < path.length - 1 && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
