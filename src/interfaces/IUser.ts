import { z } from 'zod';

const userZodSchema = z.object({
  name: z.string(),
  password: z.string(),
});

type IUser = z.infer<typeof userZodSchema>;

export default IUser;
export { userZodSchema };
