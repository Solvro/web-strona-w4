import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Path } from "@/components/Path";
import { env } from "@/env";
import { Comments } from "./Comments";
import { PostWithEmbeds } from "./PostWithEmbeds";

type UserPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage(props: UserPageProps) {
  const params = await props.params;
  const id = params.slug.split("-").pop() ?? "";

  const post = await fetchPost(id);
  if (!post) return notFound();

  const author = post._embedded?.author?.[0];
  const comments = post._embedded?.replies?.flat() || [];

  return (
    <>
      <Navbar />

      <main className="pb-32 max-w-screen-xl mx-auto w-full px-4 pt-6">
        <Path path={["Posts", post.title.rendered]} className="mb-10" />

        <div className="relative w-full">
          <h1 className="text-3xl font-bold">{post.title.rendered}</h1>
          <div>
            {author && (
              <>
                <Link href={`/team/${author.slug}-${author.id}`} className="text-brand font-medium">
                  {author.name}
                </Link>{" "}
                &bull;{" "}
              </>
            )}
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

        <Comments postId={post.id} comments={comments} />
      </main>

      <Footer />
    </>
  );
}

async function fetchPost(id: string): Promise<PostWithEmbeds | null> {
  const parsedId = parseInt(id, 10);
  if (!parsedId) return null;

  const response = await fetch(`${env.API_POSTS_URL}/${parsedId}?_embed=author,replies`);
  if (response.status === 404) return null;

  const data = await response.json();
  if (!response.ok) throw new Error(data.message);

  return data;
}
