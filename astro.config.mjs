import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: ` 
  //           @use "astro-scroll-observer/scss" as *;
  //         `,
  //       },
  //     },
  //   },
  // },
});
