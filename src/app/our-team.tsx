import Image from "next/image";
import Link from "next/link";

import { env } from "@/env";
import type { Member } from "@/types";

export async function OurTeam() {
  const response = await fetch(`${env.API_USERS_URL}?acf_format=standard`);
  const members = ((await response.json()) as Member[])
    .filter((member) => member.is_author)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="mt-14">
      <h2 className="section-header mb-10">Our Team</h2>
      <ul className="mb-6 mt-3 flex flex-row flex-wrap justify-center gap-3 sm:px-12 lg:px-0">
        {members.map((member, index) => (
          <li key={index}>
            <Link href={`/team/${member.slug}-${member.id.toString()}`}>
              <div className="mx-auto mb-2 w-[100px] flex-shrink text-center">
                <div className="mx-auto mb-1 size-20 rounded-full border-[3px] border-brand">
                  <Image
                    src={
                      member.acf.profileImage ||
                      member.avatar_urls[96] ||
                      `https://ui-avatars.com/api/?background=cf6967&color=fff&name=${member.name}`
                    }
                    width={100}
                    height={100}
                    alt={member.name}
                    className="size-full rounded-full object-cover"
                  />
                </div>
                {member.acf.titlePrefix ? (
                  <small className="mt-2 block text-xs">
                    {member.acf.titlePrefix}
                  </small>
                ) : null}
                <p className="block text-sm font-medium leading-tight">
                  {member.name}
                </p>
                {member.acf.titleSuffix ? (
                  <em className="block text-xs leading-tight">
                    {member.acf.titleSuffix}
                  </em>
                ) : null}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
