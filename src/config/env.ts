export const env = {
  database: {
    url: process.env.DATABASE_URL!,
    directUrl: process.env.DIRECT_URL!,
  },
  auth: {
    secret: process.env.AUTH_SECRET!,
    url: process.env.AUTH_URL ?? "http://localhost:3000",
    google: {
      id: process.env.AUTH_GOOGLE_ID,
      secret: process.env.AUTH_GOOGLE_SECRET,
    },
    github: {
      id: process.env.AUTH_GITHUB_ID,
      secret: process.env.AUTH_GITHUB_SECRET,
    },
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
    apiKey: process.env.CLOUDINARY_API_KEY!,
    apiSecret: process.env.CLOUDINARY_API_SECRET!,
  },
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
    name: process.env.NEXT_PUBLIC_APP_NAME ?? "BuyTime",
  },
} as const;

export function validateEnv() {
  const required = [
    "DATABASE_URL",
    "AUTH_SECRET",
    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
  ] as const;

  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0 && process.env.NODE_ENV === "production") {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}
