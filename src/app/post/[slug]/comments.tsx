import { env } from "@/env";
import { Comment } from "@/types";

type CommentsProps = {
  postId: number;
};

export default async function Comments({ postId }: CommentsProps) {
  const response = await fetch(env.API_COMMENTS_URL + `?post=${postId}`);
  if (!response.ok) throw new Error(`Error fetching comments: ${response.statusText}`);

  const comments: Comment[] = await response.json();
  const rootComments = comments.filter(comment => comment.parent === 0);
  const replies = comments.filter(comment => comment.parent !== 0);

  // TODO: add form

  return (
    <div className="mt-14">
      <h2 className="section-header mb-5">Discussion</h2>
      {rootComments.length > 0 ? (
        rootComments.map(comment => (
          <div key={comment.id} className="mb-8 ml-8">
            <div className="flex items-center mb-2">
              <img src={comment.author_avatar_urls["48"]} alt="" className="w-8 h-8 rounded-full mr-2" />
              <span className="font-bold">{comment.author === 0 ? "Anonymous" : comment.author_name}</span>
              <span className="text-gray-500 ml-2">{new Date(comment.date).toLocaleDateString()}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />

            {replies
              .filter(reply => reply.parent === comment.id)
              .map(reply => (
                <div key={reply.id} className="mt-4 pl-4 ml-4 border-l border-gray-300">
                  <div className="flex items-center mb-2">
                    <img src={reply.author_avatar_urls["48"]} alt="" className="w-8 h-8 rounded-full mr-2" />
                    <span className="font-bold">{reply.author === 0 ? "Anonymous" : reply.author_name}</span>
                    <span className="text-gray-500 ml-2">{new Date(reply.date).toLocaleDateString()}</span>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: reply.content.rendered }} />
                </div>
              ))}
          </div>
        ))
      ) : (
        <p className="ml-8">No comments yet</p>
      )}
    </div>
  )
}
