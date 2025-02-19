import Link from "next/link";
import { notFound } from "next/navigation";

import { CurrentActivePath } from "@/components/current-active-path";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { env } from "@/env";

import { Comments } from "./comments";
import type { PostWithEmbeds } from "./post-with-embeds";

interface UserPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage(props: UserPageProps) {
  const parameters = await props.params;
  const id = parameters.slug.split("-").pop() ?? "";

  const post = await fetchPost(id);
  if (post === null) {
    return notFound();
  }

  const author = post._embedded.author[0];
  const comments = post._embedded.replies.flat();

  return (
    <>
      <Navbar />

      <main className="mx-auto w-full max-w-screen-xl px-4 pb-32 pt-6">
        <CurrentActivePath
          path={["Posts", post.title.rendered]}
          className="mb-10"
        />

        <div className="relative w-full">
          <h1 className="text-3xl font-bold">{post.title.rendered}</h1>
          <div>
            <Link
              href={`/team/${author.slug}-${author.id.toString()}`}
              className="font-medium text-brand"
            >
              {author.name}
            </Link>
            &bull;
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
          className="prose mt-16 max-w-screen-md"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        <Comments postId={post.id} comments={comments} />
      </main>

      <Footer />
    </>
  );
}

async function fetchPost(id: string): Promise<PostWithEmbeds | null> {
  const parsedId = Number.parseInt(id, 10);
  if (!parsedId) {
    return null;
  }

  const response = await fetch(
    `${env.API_POSTS_URL}/${parsedId.toString()}?_embed=author,replies`,
  );
  if (response.status === 404) {
    return null;
  }
  //eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await response.json();
  if (!response.ok) {
    //eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    throw new Error(data.message);
  }

  //eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data;
}
