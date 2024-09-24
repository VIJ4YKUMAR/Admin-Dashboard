import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import vitebabel from "vite-plugin-babel"
import commonjs from "vite-plugin-commonjs"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitebabel(), commonjs()],
});
