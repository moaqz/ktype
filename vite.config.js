import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [sveltekit(), UnoCSS({ injectReset: true })],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
});
