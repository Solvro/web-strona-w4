import Link from "next/link";
import { notFound } from "next/navigation";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

import { Navbar } from "@/components/Navbar";
import { env } from "@/env";
import { Member } from "@/types";

import "./style.css";

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

      <main className="pb-32 max-w-screen-xl mx-auto w-full px-4 pt-12">
        <div className="relative w-full">
          <div className="flex flex-col md:flex-row md:space-x-4 relative z-10">
            <div className="w-[340px] mx-auto flex-shrink-0 mb-8 md:mb-0">
              <img
                src={
                  member.avatar_urls[96] ||
                  `https://ui-avatars.com/api/?background=cf6967&color=fff&name=${member.name}`
                }
                alt={`${member.name}'s avatar`}
                className="object-contain mx-auto w-[240px] h-[320px] rounded-sm shadow-sm bg-stone-100"
              />
              <div className="mt-4 text-center leading-4">
                <p>{member.acf.titlePrefix}</p>
                <h2 className="font-medium text-2xl">{member.name}</h2>
                <p>{member.acf.titleSuffix}</p>
              </div>
            </div>
            <div className="flex-grow">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="card lg:col-span-2">
                  {/* {member.acf.academic_history} */}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quibusdam, sequi
                  qui totam, quaerat blanditiis adipisci id debitis, dolorem suscipit itaque natus
                  vitae inventore placeat doloribus dignissimos esse ducimus! Quidem.
                </div>

                <div className="card">
                  <h3 className="text-lg font-medium mb-1 -mt-2">Academic background</h3>
                  <div>
                    {member.acf.academic_history}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a culpa
                    laudantium quibusdam totam molestias sunt nostrum impedit iste animi suscipit,
                    porro laboriosam. Laudantium omnis ut temporibus sed rem minus?
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-lg font-medium mb-3 -mt-2">Contact</h3>
                  <ul>
                    <li className="flex items-center mt-0">
                      <EnvelopeIcon className="size-6 shrink-0 opacity-60" />
                      <p className="ml-2">{member.acf.contact}some_mail@eda.pl</p>
                    </li>
                    <li className="flex items-center mt-2">
                      <PhoneIcon className="size-6 shrink-0 opacity-60" />
                      <p className="ml-2">{member.acf.contact}+48 702 320 888</p>
                    </li>
                  </ul>

                  <h3 className="text-lg font-medium mb-3 mt-6">Consultations</h3>
                  <div>
                    <div className="flex items-center mt-2">
                      <MapPinIcon className="size-6 shrink-0 opacity-60" />
                      <p className="ml-2">{member.acf.consultations} Lokalizacja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block h-[min(600px,calc(100%_*_1.5))] aspect-square rounded-full pointer-events-none bg-gradient-to-br from-brand to-red-900 rouned-full absolute -right-1/3 top-1/2 transform -translate-y-1/2" />

          {/* <div className="size-72 bg-brand/70 rounded-full absolute -top-[40px] -right-[30px] transform translate-x-1/3 filter blur-2xl " /> */}
          {/* <div
            style={{
              background: "linear-gradient(180deg, #EDB3B3 0%, #DB3B2B 100%)",
            }}
            className="size-72 rounded-full opacity-80 absolute bottom-0 -left-[30px] transform translate-y-1/3 filter blur-2xl "
          /> */}
        </div>

        <section className="mt-16">
          <h2 className="section-header mb-7">Blog and Publications</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
            {new Array(8).fill(0).map((_, index) => (
              <div key={index}>
                <img
                  src="https://i.imgur.com/xrmQYgi.png"
                  alt=""
                  className="border w-full object-cover h-40 mb-2 bg-white border-stone-200"
                />

                <Link href="/" className="text-lg font-medium leading-tight">
                  Autistic behaviour model &bull; April 15th, 2021
                </Link>

                <div className="text-sm mt-0.5">
                  <span className="font-medium text-brand">Category</span>
                  &nbsp;&bull;&nbsp;
                  <span>8 minutes read</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* <div>
        This is user page - {member.name}
        <img src={member.avatar_urls[96]} alt="" />
        {member.acf.titlePrefix} <br />
        {member.acf.titleSuffix} <br />
        {member.acf.academic_history} <br />
        {member.acf.consultations} <br />
        {member.acf.contact} <br />
      </div> */}
    </>
  );
}
