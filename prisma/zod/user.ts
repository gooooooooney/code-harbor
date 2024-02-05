import * as z from "zod"

export const userSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().nullish(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
