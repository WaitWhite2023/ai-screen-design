import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite-plus'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    arrowParens: 'always',
    bracketSpacing: true,
    ignorePatterns: [],
    endOfLine: 'lf',
    overrides: [
      {
        files: ['*.json5'],
        options: {
          quoteProps: 'preserve',
          singleQuote: false,
        },
      },
    ],
    plugins: ['prettier-plugin-tailwindcss'],
    printWidth: 100,
    proseWrap: 'never',
  },
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
