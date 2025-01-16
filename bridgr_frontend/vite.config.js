import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.REACT_APP_GOOGLE_API_TOKEN": JSON.stringify(
      process.env.REACT_APP_GOOGLE_API_TOKEN
    ),
    "process.env.REACT_APP_SANITY_PROJECT_ID": JSON.stringify(
      process.env.REACT_APP_SANITY_PROJECT_ID
    ),
    "process.env.REACT_APP_SANITY_TOKEN": JSON.stringify(
      process.env.REACT_APP_SANITY_TOKEN
    ),
  },
});
