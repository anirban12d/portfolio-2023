import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikReact } from "@builder.io/qwik-react/vite";
import { partytownVite } from "@builder.io/partytown/utils";
import { join } from "path";
import commonjs from 'vite-plugin-commonjs'

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      qwikReact(),
      commonjs(),
      partytownVite({ dest: join(__dirname, "dist", "~partytown") }),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=6",
      },
    },
  };
});
