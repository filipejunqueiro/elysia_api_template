import { Elysia } from "elysia";
import jwt from "@elysiajs/jwt";
import { JWT } from "@/src/utils/env";

export default (app: Elysia) =>
  app.use(jwt({ name: "auth", secret: JWT.SECRET, alg: JWT.ALGORITHM })).guard({
    beforeHandle: async ({ auth, set, headers }) => {
      const token = headers.authorization?.replace("Bearer ", "");
      const user = await auth.verify(token);

      if (user !== false) return;

      set.status = 401;
      return "Unauthorized";
    },
  });
