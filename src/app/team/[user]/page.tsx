import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

import { BlurredCircle } from "@/components/blurred-circle";
import { CurrentActivePath } from "@/components/current-active-path";
import { DependsOn } from "@/components/depends-on";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { env } from "@/env";
import type { Member, Post } from "@/types";

import "./style.css";

interface UserPageProps {
  params: Promise<{ user: string }>;
}

export default async function UserPage(props: UserPageProps) {
  const parameters = await props.params;
  const id = parameters.user.split("-").pop();
  if (id === undefined) {
    return notFound();
  }
  //eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [member, posts]: [Member, Post[]] = await Promise.all([
    fetch(`${env.API_USERS_URL}/${id}?acf_format=standard`).then(
      async (response) =>
        //eslint-disable-next-line @typescript-eslint/no-unsafe-return
        response.json(),
    ),
    fetch(`${env.API_POSTS_URL}?author=${id}`).then(async (response) =>
      //eslint-disable-next-line @typescript-eslint/no-unsafe-return
      response.json(),
    ),
  ]);
  if (!member.is_author) {
    return notFound();
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto w-full max-w-screen-xl px-4 pb-32 pt-6">
        <CurrentActivePath path={["Authors", member.name]} className="mb-10" />

        <div className="relative w-full">
          <div className="relative z-10 flex flex-col md:flex-row md:space-x-4">
            <div className="relative mx-auto mb-8 w-[340px] flex-shrink-0 md:mb-0">
              <BlurredCircle />
              <Image
                src={
                  member.acf.profileImage ||
                  member.avatar_urls[96] ||
                  `https://ui-avatars.com/api/?background=cf6967&color=fff&name=${member.name}`
                }
                width={200}
                height={200}
                alt={`${member.name}'s avatar`}
                className="relative z-10 mx-auto h-[320px] w-[240px] rounded-sm bg-secondary/30 object-contain shadow-sm"
              />
              <div className="mt-4 text-center leading-4">
                <p>{member.acf.titlePrefix}</p>
                <h2 className="text-2xl font-medium">{member.name}</h2>
                <p>{member.acf.titleSuffix}</p>
              </div>
            </div>
            <div className="relative flex-grow">
              <div className="grid gap-6 lg:grid-cols-2">
                {member.acf.profileHeader ? (
                  <div className="card lg:col-span-2">
                    {member.acf.profileHeader}
                  </div>
                ) : null}

                {member.acf.academicHistory ? (
                  <div className="card">
                    <h3 className="mb-1 text-lg font-medium">
                      Academic background
                    </h3>
                    <div
                      className="text-sm"
                      dangerouslySetInnerHTML={{
                        __html: member.acf.academicHistory,
                      }}
                    />
                  </div>
                ) : null}

                <DependsOn
                  dependents={[member.acf.contact, member.acf.consultations]}
                  className="card space-y-5"
                >
                  <DependsOn dependents={[member.acf.contact]}>
                    <h3 className="mb-1 text-lg font-medium leading-tight">
                      Contact
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <EnvelopeIcon className="size-5 shrink-0 opacity-60" />
                        <p className="ml-2">{member.acf.contact}</p>
                      </li>
                      <li className="flex items-center text-sm">
                        <PhoneIcon className="size-5 shrink-0 opacity-60" />
                        <p className="ml-2">{member.acf.contact}</p>
                      </li>
                    </ul>
                  </DependsOn>

                  <DependsOn dependents={[member.acf.consultations]}>
                    <h3 className="mb-1 text-lg font-medium leading-tight">
                      Consultations
                    </h3>
                    <div>
                      <div className="flex items-center text-sm">
                        <MapPinIcon className="size-5 shrink-0 opacity-60" />
                        <p className="ml-2">{member.acf.consultations}</p>
                      </div>
                    </div>
                  </DependsOn>
                </DependsOn>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <div className="ml-auto w-full relative">
            <BlurredCircle />
          </div>
        </div> */}

        {posts.length > 0 && (
          <section className="mt-16">
            <h2 className="section-header mb-7">Blog and Publications</h2>
            <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {posts.map((post, index) => (
                <div key={index}>
                  <Image
                    src={
                      post.fimg_url === false
                        ? "https://i.imgur.com/xrmQYgi.png"
                        : post.fimg_url
                    }
                    width={200}
                    height={200}
                    alt=""
                    className="mb-2 h-40 w-full border border-stone-200 bg-secondary object-cover"
                  />
                  <Link
                    href={`/post/${post.slug}-${post.id.toString()}`}
                    className="text-lg font-medium leading-tight"
                  >
                    {post.title.rendered} &bull;{" "}
                    {new Date(post.date).toLocaleDateString()}
                  </Link>
                  <div className="mt-0.5 text-sm">
                    {/* <span className="font-medium text-brand">Category</span>
                    &nbsp;&bull;&nbsp; */}
                    <span>
                      {computeReadTime(post.content.rendered)} minute read
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

function computeReadTime(content: string) {
  return Math.ceil(content.replaceAll(/<[^>]*>/gm, "").split(" ").length / 200);
}
