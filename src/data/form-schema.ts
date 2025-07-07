import z from "zod";

export const singupSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean(),
});
export type singupSchemaType = z.infer<typeof singupSchema>;

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password must be at least 8 characters"),
  remember: z.boolean(),
});
export type LoginSchemaType = z.infer<typeof loginSchema>;
