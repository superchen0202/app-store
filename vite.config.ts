import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const DEV_MODE = mode === 'development';

  return {
    plugins: [react(), tailwindcss()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    },
    define: {
      'process.env': JSON.stringify(env),
    },
    build: {
      outDir: 'dist',
      sourcemap: DEV_MODE,
      rollupOptions: {
        output: {
          entryFileNames: 'index.[hash].js',
          assetFileNames: '[name].[hash].[ext]',
        },
      },
    },
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.svg', '**/*.ico'],
    publicDir: 'public',
  };
});
