import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { mainRouter } from "./router/index.routes.ts";
import { logger } from "hono/logger";
import { PrismaClient } from "./generated/prisma/index.js";
import { cors } from "hono/cors";

const app = new Hono();
export const prisma = new PrismaClient();

app.use(logger());

app.use(
	cors({
		origin: ['https://todo-lid.netlify.app'], // Your frontend application
	})
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("", mainRouter);

const port = Number(process.env.PORT || 8000);
serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);

