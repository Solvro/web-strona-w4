import Link from "next/link";
import { Member } from "@/types";
import { env } from "@/env";

export async function OurTeam() {
  const response = await fetch(env.API_USERS_URL + "?acf_format=standard");
  const members: Member[] = (await response.json()).filter((member: Member) => member.is_author);

  return (
    <div className="mt-14">
      <h2 className="section-header mb-10">Our Team</h2>
      <ul className="mt-3 mb-6 sm:px-12 lg:px-0 flex flex-row gap-3 justify-center flex-wrap">
        {members.map((member, index) => (
          <li key={index}>
            <Link href={`/team/${member.slug}`}>
              <div className="mx-auto text-center w-[100px] flex-shrink mb-2">
                <div className="size-20 border-[3px] mx-auto mb-1 border-brand rounded-full">
                  <img
                    src={
                      member.acf.profileImage ||
                      member.avatar_urls[96] ||
                      `https://ui-avatars.com/api/?background=cf6967&color=fff&name=${member.name}`
                    }
                    className="rounded-full size-full object-cover"
                  />
                </div>
                {member.acf.titlePrefix && (
                  <small className="text-xs block mt-2">{member.acf.titlePrefix}</small>
                )}
                <p className="text-sm block font-medium leading-tight">{member.name}</p>
                {member.acf.titleSuffix && (
                  <em className="text-xs block leading-tight">{member.acf.titleSuffix}</em>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
