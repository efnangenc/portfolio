import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { qrcode } from "vite-plugin-qrcode";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), qrcode()],
  base: '/portfolio/',
  server: {
    host: true, // 🔑 QR kodun çalışması için gerekli
  },
});
