import { env } from "@/env";
import { cn } from "@/lib/utils";
import { Comment as _Comment } from "@/types";

type CommentsProps = {
  postId: number;
};

export default async function Comments({ postId }: CommentsProps) {
  const params = new URLSearchParams({
    post: postId.toString(),
  });
  const response = await fetch(env.API_COMMENTS_URL + "?" + params.toString());

  const comments: _Comment[] = await response.json();
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
    </div>
  );
}

function Comment({
  comment,
  context,
  depth = 0,
}: {
  comment: _Comment;
  context: _Comment[];
  depth?: number;
}) {
  const replies = context.filter((c) => c.parent === comment.id);

  return (
    <div className={cn("ml-2 md:ml-4 mb-4", depth > 0 && "pl-4 border-l border-secondary")}>
      <div className="flex items-center mb-2">
        <img src={comment.author_avatar_urls["48"]} className="w-8 h-8 rounded-full mr-2" />
        <span className="font-bold">
          {comment.author === 0 ? "Anonymous" : comment.author_name}
        </span>
        <span className="text-muted-foreground ml-2">
          {new Date(comment.date).toLocaleDateString()}
        </span>
      </div>

      <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />

      <div className="mt-2">
        {replies.map((reply) => (
          <Comment key={reply.id} comment={reply} context={context} depth={depth + 1} />
        ))}
      </div>
    </div>
  );
}
