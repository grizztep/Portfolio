import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/Portfolio/",  // Make sure this matches your GitHub repo name
  plugins: [react()],
});
