/* eslint-disable */
import { publicProcedure } from "../../trpc";
import { postCooldown } from "../../middleware/postCooldown";

export const postAbility = () =>
  publicProcedure.use(postCooldown).mutation(async () => ({
    success: true,
    message: "user can post",
  }));
