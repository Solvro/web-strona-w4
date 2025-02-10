import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    API_USERS_URL: z.string().url(),
    API_EVENTS_URL: z.string().url(),
    API_POSTS_URL: z.string().url(),
    API_COMMENTS_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_API: z.string().url(),
  },

  runtimeEnv: {
    API_USERS_URL: process.env.API_USERS_URL,
    API_EVENTS_URL: process.env.API_EVENTS_URL,
    API_POSTS_URL: process.env.API_POSTS_URL,
    API_COMMENTS_URL: process.env.API_COMMENTS_URL,
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
  },
});
