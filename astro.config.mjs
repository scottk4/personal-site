// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://app.netlify.com/projects/glittering-crepe-66d2cc/overview",
  integrations: [preact()]
});