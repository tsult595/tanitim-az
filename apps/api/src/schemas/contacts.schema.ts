import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(2).max(200),
  phone: z.string().trim().min(3).max(40),
  message: z.string().trim().min(5).max(5000),
});

export const replySchema = z.object({
  reply: z.string().trim().min(1).max(10000),
});
