import { notFound } from "next/navigation";

import { Navbar } from "@/components/Navbar";
import { env } from "@/env";
import { Member } from "@/types";

type UserPageProps = {
  params: Promise<{ user: string }>;
};

export default async function UserPage(props: UserPageProps) {
  const params = await props.params;

  const requestParams = new URLSearchParams({
    slug: params.user,
  });

  const response = await fetch(env.API_USERS_URL + "?" + requestParams.toString());
  if (!response.ok) throw new Error(`Error fetching members: ${response.statusText}`);

  const body = await response.json();
  if (!Array.isArray(body) || body.length === 0) return notFound();

  const member: Member = body[0];

  return (
    <>
      <Navbar />

      <div>
        This is user page - {member.name}
        <img src={member.avatar_urls[96]} alt="" />
        {member.acf.titlePrefix} <br />
        {member.acf.titleSuffix} <br />
        {member.acf.academic_history} <br />
        {member.acf.consultations} <br />
        {member.acf.contact} <br />
      </div>
    </>
  );
}
