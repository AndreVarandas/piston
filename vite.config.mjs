import { defineConfig } from 'vite'
import { terser } from 'rollup-plugin-terser'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'PistonGameEngine',
      formats: ['es'],
      fileName: format => `piston-game-engine.${format}.js`,
    },
    rollupOptions: {
      external: ['rxjs'],
      output: {
        globals: {
          rxjs: 'rxjs',
        },
      },
      plugins: [
        terser({
          // Minify the output
          compress: {
            drop_console: true, // Remove console.logs
            pure_funcs: ['console.info', 'console.debug', 'console.warn'], // Remove console.info, console.debug, console.warn
          },
        }),
      ],
    },
    sourcemap: false,
  },
  plugins: [
    dts({
      tsConfigFilePath: './tsconfig.json',
      outputDir: './dist',
      insertTypesEntry: true,
    }),
  ],
})
