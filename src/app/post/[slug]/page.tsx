import { notFound } from "next/navigation";
import Link from "next/link";

import { Navbar } from "@/components/Navbar";
import { env } from "@/env";
import { Member, Post } from "@/types";
import Comments from "./comments";
import Footer from "@/components/Footer";
import { Path } from "@/components/Path";

type UserPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage(props: UserPageProps) {
  const params = await props.params;

  const requestParams = new URLSearchParams({
    slug: params.slug,
  });

  let response = await fetch(env.API_POSTS_URL + "?" + requestParams.toString());
  const body = await response.json();
  if (!Array.isArray(body) || body.length !== 1) return notFound();

  const post: Post = body[0];

  response = await fetch(env.API_USERS_URL + "/" + post.author + "?acf_format=standard");
  const author: Member = await response.json();

  // TODO: get comments for the post
  // TODO: get author of the post
  // TODO: create a form to add a comment

  return (
    <>
      <Navbar />

      <main className="pb-32 max-w-screen-xl mx-auto w-full px-4 pt-6">
        <Path path={["Posts", post.title.rendered]} className="mb-10" />

        <div className="relative w-full">
          <h1 className="text-3xl font-bold">{post.title.rendered}</h1>
          <div>
            <Link href={`/team/${author.slug}`} className="text-brand">
              {author.name}
            </Link>{" "}
            <span>
              {new Date(post.date).toLocaleDateString("pl", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "Europe/Warsaw",
              })}
            </span>
          </div>
        </div>

        <section
          className="mt-16 prose max-w-screen-md"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        <Comments postId={post.id} />
      </main>

      <Footer />
    </>
  );
}
