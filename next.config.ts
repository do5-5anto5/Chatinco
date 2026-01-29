import type { NextConfig } from "next";
import config from "./config.js";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pravatar.cc", "res.cloudinary.com", "placehold.co"],
  },

  env: {
    DB_URL: config.DB_URL,

    API: config.API,

    CLOUDINARY_CLOUD_NAME: config.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: config.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: config.CLOUDINARY_API_SECRET,

    GOOGLE_CLIENT_ID: config.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: config.GOOGLE_CLIENT_SECRET,

    NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,

    RAZOR_PAY_KEY_ID: config.RAZOR_PAY_KEY_ID,
    RAZOR_PAY_KEY_SECRET: config.RAZOR_PAY_KEY_SECRET,

    PAYPAL_CLIENT_ID: config.PAYPAL_CLIENT_ID,
    PAYPAL_CLIENT_SECRET: config.PAYPAL_CLIENT_SECRET,

    APP_ID: config.APP_ID,
    KEY: config.KEY,
    SECRET: config.SECRET,
    CLUSTER: config.CLUSTER,
  },
};

export default nextConfig;
