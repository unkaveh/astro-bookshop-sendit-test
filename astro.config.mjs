import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import bookshop from "@bookshop/astro-bookshop";

// https://astro.build/config
export default defineConfig({
  site: "https://loved-parsnip.cloudvent.net/",
  integrations: [bookshop(), react()],
});
