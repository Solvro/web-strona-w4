import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DependsOn } from "@/components/DependsOn";
import { Path } from "@/components/Path";
import { env } from "@/env";
import { Member, Post } from "@/types";

import "./style.css";

type UserPageProps = {
  params: Promise<{ user: string }>;
};

export default async function UserPage(props: UserPageProps) {
  const params = await props.params;
  const id = params.user.split("-").pop();

  const [member, posts]: [Member, Post[]] = await Promise.all([
    fetch(`${env.API_USERS_URL}/${id}?acf_format=standard`).then((res) => res.json()),
    fetch(`${env.API_POSTS_URL}?author=${id}`).then((res) => res.json()),
  ]);
  if (!member.is_author) return notFound();

  return (
    <>
      <Navbar />

      <main className="pb-32 max-w-screen-xl mx-auto w-full px-4 pt-6">
        <Path path={["Authors", member.name]} className="mb-10" />

        <div className="relative w-full">
          <div className="flex flex-col md:flex-row md:space-x-4 relative z-10">
            <div className="w-[340px] mx-auto flex-shrink-0 mb-8 md:mb-0">
              <img
                src={
                  member.acf.profileImage ||
                  member.avatar_urls[96] ||
                  `https://ui-avatars.com/api/?background=cf6967&color=fff&name=${member.name}`
                }
                alt={`${member.name}'s avatar`}
                className="object-contain mx-auto w-[240px] h-[320px] rounded-sm shadow-sm bg-secondary"
              />
              <div className="mt-4 text-center leading-4">
                <p>{member.acf.titlePrefix}</p>
                <h2 className="font-medium text-2xl">{member.name}</h2>
                <p>{member.acf.titleSuffix}</p>
              </div>
            </div>
            <div className="flex-grow">
              <div className="grid lg:grid-cols-2 gap-6">
                {member.acf.profileHeader && (
                  <div className="card lg:col-span-2">{member.acf.profileHeader}</div>
                )}

                {member.acf.academicHistory && (
                  <div className="card">
                    <h3 className="text-lg font-medium mb-1">Academic background</h3>
                    <div
                      className="text-sm"
                      dangerouslySetInnerHTML={{
                        __html: member.acf.academicHistory,
                      }}
                    />
                  </div>
                )}

                <DependsOn
                  dependents={[member.acf.contact, member.acf.consultations]}
                  className="card space-y-5"
                >
                  <DependsOn dependents={[member.acf.contact]}>
                    <h3 className="text-lg font-medium mb-1 leading-tight">Contact</h3>
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
                    <h3 className="text-lg font-medium mb-1 leading-tight">Consultations</h3>
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

          <div className="hidden lg:block h-[min(600px,calc(100%_*_1.5))] aspect-square rounded-full pointer-events-none bg-gradient-to-br from-brand to-red-900 rouned-full absolute -right-1/3 top-1/2 transform -translate-y-1/2" />
        </div>

        {posts.length > 0 && (
          <section className="mt-16">
            <h2 className="section-header mb-7">Blog and Publications</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
              {posts.map((post, index) => (
                <div key={index}>
                  <img
                    src={post.fimg_url ? post.fimg_url : "https://i.imgur.com/xrmQYgi.png"}
                    alt=""
                    className="border w-full object-cover h-40 mb-2 bg-secondary border-stone-200"
                  />

                  <Link
                    href={`/post/${post.slug}-${post.id}`}
                    className="text-lg font-medium leading-tight"
                  >
                    {post.title.rendered} &bull; {new Date(post.date).toLocaleDateString()}
                  </Link>

                  <div className="text-sm mt-0.5">
                    {/* <span className="font-medium text-brand">Category</span>
                    &nbsp;&bull;&nbsp; */}
                    <span>{computeReadTime(post.content.rendered)} minute read</span>
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
