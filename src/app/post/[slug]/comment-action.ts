"use server";

import { env } from "@/env";

interface VerificationResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
  action: string;
  "error-codes"?: string[];
}

async function verifyRecaptcha(token: string) {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${env.CAPTCHA_SECRET_KEY}&response=${token}`,
    { method: "POST" },
  );
  if (!response.ok) {
    throw new Error("Failed to verify reCAPTCHA. Please try again.");
  }
  const data = (await response.json()) as VerificationResponse;
  if (!data.success || data.score < 0.5) {
    throw new Error("reCAPTCHA verification failed. Please try again.");
  }
  return data;
}

export async function submitComment(formData: FormData) {
  await verifyRecaptcha(formData.get("token") as string);

  const response = await fetch(`${env.NEXT_PUBLIC_API}/comments`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Failed to submit the comment. Try again later.");
  }
}
