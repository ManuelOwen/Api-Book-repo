import {z} from 'zod';
export const Bookchema = z.object({
    title: z.string(),
    Author: z.string(),
    year_published: z.string()

})