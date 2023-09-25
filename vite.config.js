import { globSync } from "glob";
import { resolve } from "path";
import kirby from "vite-plugin-kirby";
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindConfig from "tailwindcss/stubs/tailwind.config.js";

const input = [
  'src/index.js',
  'src/index.css',
  ...globSync("src/templates/*/index.{js,css,svelte}"),
  ...globSync("src/**/*.svelte"),
].map((path) => resolve(process.cwd(), path))

/*for debuging the input files if they are not working*/
//console.log(input)

export default ({ mode }) => ({
  root: "src",
  base: mode === "development" ? "/" : "/dist/",

  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },

  build: {
    outDir: resolve(process.cwd(), "public/dist"),
    emptyOutDir: true,
    rollupOptions: { input },
  },

  css: {
    postcss: {
      plugins: [
        tailwindConfig,
        autoprefixer,
      ],
    },
  },
  plugins: [svelte({
    compilerOptions: {
        customElement: true,
    }
  }),kirby()],
});