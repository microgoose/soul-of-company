import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
    plugins: [
        react(),
        svgr()
    ],
})
