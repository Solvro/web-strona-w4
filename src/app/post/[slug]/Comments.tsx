import Image from "next/image";

import { cn } from "@/lib/utils";

import { CommentForm } from "./comment-form";
import type { PostWithEmbeds } from "./post-with-embeds";

type Comments = PostWithEmbeds["_embedded"]["replies"][number];
type Comment = Comments[number];

//eslint-disable-next-line @typescript-eslint/no-redeclare
export function Comments({
  postId,
  comments,
}: {
  postId: number;
  comments: Comments;
}) {
  const rootComments = comments.filter((comment) => comment.parent === 0);
  return (
    <div className="mt-14">
      <h2 className="section-header mb-5">Discussion</h2>
      {rootComments.length > 0 ? (
        rootComments.map((comment) => (
          <Comment key={comment.id} comment={comment} context={comments} />
        ))
      ) : (
        <p className="ml-4">No comments yet</p>
      )}

      <CommentForm postId={postId} />
    </div>
  );
}

//eslint-disable-next-line @typescript-eslint/no-redeclare
function Comment({
  comment,
  context,
  depth = 0,
}: {
  comment: Comment;
  context: Comments;
  depth?: number;
}) {
  const replies = context.filter((c) => c.parent === comment.id);

  return (
    <div
      className={cn(
        "mb-4 ml-2 md:ml-4",
        depth > 0 && "border-l border-secondary pl-4",
      )}
    >
      <div className="mb-2 flex items-center">
        <Image
          src={comment.author_avatar_urls["48"]}
          className="mr-2 h-8 w-8 rounded-full"
          alt=""
          width={100}
          height={100}
        />
        <span className="font-bold">
          {comment.author === 0 ? "Anonymous" : comment.author_name}
        </span>
        <span className="ml-2 text-sm text-muted-foreground">
          {new Date(comment.date).toLocaleDateString()}
        </span>
      </div>

      <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />

      <div className="mt-2">
        {replies.map((reply) => (
          <Comment
            key={reply.id}
            comment={reply}
            context={context}
            depth={depth + 1}
          />
        ))}
      </div>
    </div>
  );
}
