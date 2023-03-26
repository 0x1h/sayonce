import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { type GiphyType } from "@/types/Giphy.types";

export const apiRequest = (search: string) => {  
  return `https://tenor.googleapis.com/v2/search?q=${search}&key=${process.env.NEXT_GIPHY_API_KEY}&limit=18&media_filter=gif`
}

export const gif = () => {
  return publicProcedure
  .input(z.object({ search: z.string() }))
  .query(async ({ input }) => {
    try {
      const response: Response = await fetch(apiRequest(input.search))
      const data: GiphyType = await response.json()
      
      return {
        gifs: data
      };
    }catch(err){
      return {error: err}
    }
  })
}