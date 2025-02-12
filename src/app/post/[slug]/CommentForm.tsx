"use client";

import { Frown, Smile } from "lucide-react";
import { FormEvent, useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { env } from "@/env";

export function CommentForm({ postId }: { postId: number }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch(`${env.NEXT_PUBLIC_API}/comments`, {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      setSubmitted(true);
      return;
    }
    const data = await res.json();
    setError(data.message || "An error occurred. Please try again later.");
  }

  if (submitted) {
    return (
      <Alert className="max-w-xl">
        <Smile className="h-4 w-4" />
        <AlertTitle>Comment sent!</AlertTitle>
        <AlertDescription>
          Thank you for your comment. It will be verified by the administrators before being
          published.
        </AlertDescription>
      </Alert>
    );
  }
  return (
    <form onSubmit={handleComment} className="max-w-xl space-y-3 mt-12">
      <div>
        <label className="font-medium mb-1" htmlFor="author_name">
          Name
        </label>
        <input
          required
          type="text"
          name="author_name"
          placeholder="John Doe"
          className="rounded-md w-full border shadow-sm py-1.5 px-3"
        />
      </div>
      <div>
        <label className="font-medium mb-1" htmlFor="author_email">
          Email
        </label>
        <input
          required
          type="email"
          name="author_email"
          placeholder="john.doe@mit.edu"
          className="rounded-md w-full border shadow-sm py-1.5 px-3"
        />
      </div>
      <div>
        <label className="font-medium mb-1" htmlFor="content">
          Your message
        </label>
        <textarea
          required
          name="content"
          placeholder=""
          className="rounded-md w-full border shadow-sm py-1.5 px-3"
        ></textarea>
        <small className="text-muted-foreground text-sm -mt-1 block">
          Your comment will be verified by the administrators before being published.
        </small>
      </div>

      <input type="number" value={postId} hidden name="post" readOnly />

      {error && (
        <Alert className="max-w-xl" variant="destructive">
          <Frown className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <button
        type="submit"
        className="py-3 bg-brand hover:opacity-90 transition-all !mt-6 block text-white rounded-md w-full"
      >
        Comment
      </button>
    </form>
  );
}
