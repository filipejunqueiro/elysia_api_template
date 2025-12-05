import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { API } from "@/utils/env";
import { DESCRIPTION, NAME, VERSION } from "@/utils/config";
import example from "./modules/example";

new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: NAME,
          description: DESCRIPTION,
          version: VERSION,
        },
      },
    })
  )
  .get("/", () => null)
  .use(example)
  .listen(API.PORT);
