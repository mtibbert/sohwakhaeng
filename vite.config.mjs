import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// Plugin not currently in use
// import viteExposeGasFunctions from './vite-plugins/gas-expose.js';

const targets = [
  {
    src: "node_modules/apps-script-oauth2/dist/OAuth2.gs",
    dest: "zek",
    rename: { stripBase: 1 }, // Keep NPM package name
  },
  { src: "src/**/*.gs", dest: ".", rename: { stripBase: true } },
  { src: "zoetic", dest: ".", rename: { stripBase: false } },
  { src: "appsscript.json", dest: ".", rename: { stripBase: true } },
];

export default defineConfig(({ mode }) => ({
  plugins: [viteStaticCopy({ targets })],
  build: {
    target: 'es2020',
    sourcemap: true,
    minify: false, // Easier for GAS debugging
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: "src/lib/index.js",
      name: 'gs',  // Global GAS environment variable name
      formats: ["umd"],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'zek/gs/lib/sohwakhaeng.js',
      },
    },
  },
}));
