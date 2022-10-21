import { z } from 'zod';

const bookZodSchema = z.object({
  title: z.string(),
  author: z.string(),
});

type IBook = z.infer<typeof bookZodSchema>;

export default IBook;
export { bookZodSchema };
