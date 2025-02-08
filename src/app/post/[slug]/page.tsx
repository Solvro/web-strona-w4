import Link from "next/link";
import { notFound } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "@heroicons/react/24/outline";

import { Navbar } from "@/components/Navbar";
import { env } from "@/env";
import { Member, Post } from "@/types";
import Comments from "./comments";
import Footer from "@/components/Footer";

type UserPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function PostPage(props: UserPageProps) {
    const params = await props.params;

    const requestParams = new URLSearchParams({
        slug: params.slug,
    });

    const response = await fetch(env.API_POSTS_URL + "?" + requestParams.toString());
    if (!response.ok) throw new Error(`Error fetching members: ${response.statusText}`);
    const body = await response.json();
    if (!Array.isArray(body) || body.length !== 1) return notFound();
    const post: Post = body[0];

    const author = await fetch(env.API_USERS_URL + `?include=${post.author}`);
    if (!author.ok) throw new Error(`Error fetching author: ${author.statusText}`);
    const authorBody = await author.json();
    if (!Array.isArray(authorBody) || authorBody.length !== 1) return notFound();
    const authorData: Member = authorBody[0];

    // TODO: create a form to add a comment

    return (
        <>
            <Navbar></Navbar>

            <main className="pb-32 max-w-screen-xl mx-auto w-full px-4 pt-6">
                <Breadcrumb className="mb-10">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">
                                    <HomeIcon className="size-5 shrink-0" />
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>Authors</BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href={`/team/${authorData.slug}`}>
                                    {/* <HomeIcon className="size-5 shrink-0" /> */}
                                    {authorData.name}
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{post.title.rendered}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="relative w-full">
                    <h1 className="text-3xl font-bold">{post.title.rendered}</h1>
                    {/* Add italic text */}
                    <div className="text-sm text-gray-500 italic">
                        <Link href={`/team/${authorData.slug}`}>{authorData.name}</Link>
                        &nbsp;&bull;&nbsp;
                        {new Date(post.date).toLocaleDateString()}
                    </div>
                </div>

                <div className="prose-lg dark:prose-invert mx-auto">
                    <section className="mt-16 w-full" dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
                    </section>
                </div>

                <Comments postId={post.id} />
            </main>

            <Footer />
        </>
    );
}