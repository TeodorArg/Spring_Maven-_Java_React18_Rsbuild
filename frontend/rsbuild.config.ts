import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  html: {
    title: 'Spring Boot - React 18 - Rsbuild',
    meta: {
      description:
        'Проект на Spring Boot + Maven + Java21 && Node18 + React18 + Rsbuild',
    },
    inject: 'body',
    favicon: './src/assets/favicon/favicon.png',
    appIcon: './src/assets/favicon/favicon.png',
    template: './rsbuild-template/index.html',
  },
  source: {
    entry: {
      index: './src/main.tsx',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://host.docker.internal:8080/',
      },
    },
  },
});
