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
          Thank you for your comment. It will be verified by the administrators
          before being published.
        </AlertDescription>
      </Alert>
    );
  }
  return (
    <form onSubmit={handleComment} className="mt-12 max-w-xl space-y-3">
      <div>
        <label className="mb-1 font-medium" htmlFor="author_name">
          Name
        </label>
        <input
          required
          type="text"
          name="author_name"
          placeholder="John Doe"
          className="w-full rounded-md border px-3 py-1.5 shadow-sm"
        />
      </div>
      <div>
        <label className="mb-1 font-medium" htmlFor="author_email">
          Email
        </label>
        <input
          required
          type="email"
          name="author_email"
          placeholder="john.doe@mit.edu"
          className="w-full rounded-md border px-3 py-1.5 shadow-sm"
        />
      </div>
      <div>
        <label className="mb-1 font-medium" htmlFor="content">
          Your message
        </label>
        <textarea
          required
          name="content"
          placeholder=""
          className="w-full rounded-md border px-3 py-1.5 shadow-sm"
        ></textarea>
        <small className="-mt-1 block text-sm text-muted-foreground">
          Your comment will be verified by the administrators before being
          published.
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
        className="!mt-6 block w-full rounded-md bg-brand py-3 text-white transition-all hover:opacity-90"
      >
        Comment
      </button>
    </form>
  );
}
