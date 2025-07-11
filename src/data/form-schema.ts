import z from "zod";

export const singupSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean(),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password must be at least 8 characters"),
  remember: z.boolean(),
});

export const ConfirmforgotPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirm_password: z.string().min(8, "Password must be at least 8 characters"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const createClassSchema = z.object({
  name: z.string().min(1, "name is required"),
  description: z.string().min(1, "description is required"),
});

export const createPlanSchema = z.object({
  title: z.string().min(1, "title is required"),
  duration: z.number().int("Duration must be an integer"),
  goals: z.string().min(1, "goals is required"),
});

export type createPlanSchemaType = z.infer<typeof createPlanSchema>;
export type createClassSchemaType = z.infer<typeof createClassSchema>;
export type forgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
export type singupSchemaType = z.infer<typeof singupSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;
export type ConfirmforgotPasswordSchemaType = z.infer<
  typeof ConfirmforgotPasswordSchema
>;
