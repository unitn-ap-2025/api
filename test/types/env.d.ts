import "cloudflare:test";
declare module "cloudflare:test" {
	interface ProvidedEnv {
		DB: D1Database;
	}
}
