import { env } from "@/env";
import { Comment } from "@/types";

type CommentsProps = {
    postId: number;
};

export default async function Comments({ postId }: CommentsProps) {
    const response = await fetch(env.API_COMMENTS_URL + `?post=${postId}`);
    if (!response.ok) throw new Error(`Error fetching comments: ${response.statusText}`);
    const comments: Comment[] = await response.json();

    //TODO: add form
    //TODO: add parent logic

    return (
        <div className="mt-14">
            <h2 className="section-header mb-5">Discussion</h2>
            {(comments.length > 0) ? (
                comments.map((comment) => (
                    <div key={comment.id} className="mb-8">
                        <div className="flex items-center mb-2">
                            <img src={comment.author_avatar_urls["48"]} alt="" className="w-8 h-8 rounded-full mr-2" />
                            <span className="font-bold">{comment.author_name === "" ? "Anonymous" : comment.author_name}</span>
                            <span className="text-gray-500 ml-2">{new Date(comment.date).toLocaleDateString()}</span>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />
                    </div>
                ))
            ) : (
                <p>No comments yet</p>
            )}
        </div>
    )
}
