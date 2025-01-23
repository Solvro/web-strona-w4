import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    API_USERS_URL: z.string().url(),
    API_EVENTS_URL: z.string().url(),
  },
  client: {},

  runtimeEnv: {
    API_USERS_URL: process.env.API_USERS_URL,
    API_EVENTS_URL: process.env.API_EVENTS_URL,
  },
});
