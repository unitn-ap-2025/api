import { Hono } from "hono";

export const health = new Hono().get("/healthz", (c) =>
	c.json({ ok: true, ts: Date.now() }),
);
