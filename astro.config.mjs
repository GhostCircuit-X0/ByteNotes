import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import deno from '@astrojs/deno'; // <-- Add this line

const getSiteURL = () => {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.VERCEL_BRANCH_URL) return `https://${process.env.VERCEL_BRANCH_URL}`;
  return 'http://localhost:4321';
};

export default defineConfig({
  site: getSiteURL(),
  output: 'server', // <-- Required for Deno Deploy
  adapter: deno(),  // <-- Required adapter for Deno
  integrations: [
    tailwind(),
    react(),
  ],
  vite: {
    define: {
      'import.meta.env.SPOTIFY_CLIENT_ID': JSON.stringify(process.env.SPOTIFY_CLIENT_ID),
      'import.meta.env.SPOTIFY_CLIENT_SECRET': JSON.stringify(process.env.SPOTIFY_CLIENT_SECRET),
      'import.meta.env.SPOTIFY_REFRESH_TOKEN': JSON.stringify(process.env.SPOTIFY_REFRESH_TOKEN),
    },
  },
});
