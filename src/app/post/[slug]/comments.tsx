import { env } from "@/env";
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
  const replies = comments.filter((comment) => comment.parent !== 0);

  return (
    <div className="mt-14">
      <h2 className="section-header mb-5">Discussion</h2>
      {rootComments.length > 0 ? (
        rootComments.map((comment) => (
          <div key={comment.id} className="mb-4 ml-4">
            <Comment comment={comment} />
            <div>
              {replies
                .filter((reply) => reply.parent === comment.id)
                .map((reply) => (
                  <div key={reply.id} className="mt-4 pl-4 ml-4 border-l border-gray-300">
                    <Comment comment={reply} />
                  </div>
                ))}
            </div>
          </div>
        ))
      ) : (
        <p className="ml-8">No comments yet</p>
      )}
    </div>
  );
}

function Comment({ comment }: { comment: _Comment }) {
  return (
    <div>
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
    </div>
  );
}
