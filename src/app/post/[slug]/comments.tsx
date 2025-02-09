type CommentsProps = {
  postId: number;
};

export default function Comments({ postId }: CommentsProps) {
  return (
    <div className="mt-14">
      <h2 className="section-header mb-10">Discussion</h2>
      No comments yet
    </div>
  );
}
