import type { NextConfig } from 'next';

// Static export served from GitHub Pages at /ambit-site. trailingSlash stays
// false so routes export as flat files (support.html) — preserving the URLs
// already submitted to App Store Connect from the original static site.
const config: NextConfig = {
  output: 'export',
  basePath: '/ambit-site',
  images: { unoptimized: true },
};
export default config;
