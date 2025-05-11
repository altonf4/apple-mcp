import { z } from "zod";
import { config } from "dotenv";

// Load environment variables
config();

// Configuration schema
const configSchema = z.object({
  // Server
  PORT: z.string().transform(Number).default("3000"),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  
  // Security
  ALLOWED_ORIGINS: z.string().transform((val) => val.split(",")),
  RATE_LIMIT_WINDOW_MS: z.string().transform(Number).default("900000"),
  RATE_LIMIT_MAX_REQUESTS: z.string().transform(Number).default("100"),
  
  // Logging
  LOG_LEVEL: z.enum(["error", "warn", "info", "debug"]).default("info"),
});

// Parse and validate configuration
const parsedConfig = configSchema.safeParse(process.env);

if (!parsedConfig.success) {
  console.error("❌ Invalid environment variables:", parsedConfig.error.format());
  process.exit(1);
}

export const CONFIG = parsedConfig.data;

// Type for the configuration
export type Config = typeof CONFIG; 