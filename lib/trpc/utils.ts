import { env } from "@/lib/env.mjs";
function getBaseUrl() {
  if (typeof window !== "undefined") return "";
  if (env.NEXT_PUBLIC_ROOT_URL) return env.NEXT_PUBLIC_ROOT_URL;
  return "http://localhost:3000";
}

export function getUrl() {
  return getBaseUrl() + "/api/trpc";
}