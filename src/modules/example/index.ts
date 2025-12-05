import Elysia from "elysia";
import auth from "@/modules/auth";

export default (app: Elysia) =>
  app.use(auth).get("/example", () => "Hello from example module!");
