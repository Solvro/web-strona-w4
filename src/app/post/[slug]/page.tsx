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
import { Post } from "@/types";
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

    // TODO: get comments for the post
    // TODO: get author of the post
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
                        <BreadcrumbItem>Posts</BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{post.title.rendered}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="relative w-full">
                    <h1 className="text-3xl font-bold">{post.title.rendered}</h1>
                    <div>
                        Jan Kowlaski
                        25.01.2025
                    </div>
                </div>

                {/* TODO: content styles, tailwind removed default styles */}
                <section className="mt-16" dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
                </section>

                <Comments postId={post.id}/>
            </main>

            <Footer />
        </>
    );
}