import type { NextConfig } from 'next';

// Static export deployed to two targets: GitHub Pages serves at /ambit-site
// (the URLs already submitted to App Store Connect), Vercel serves at the
// domain root. GITHUB_ACTIONS is set automatically in the Pages workflow, so
// the basePath applies only there — without this, Vercel loads assets from
// /ambit-site/_next and renders unstyled HTML. trailingSlash stays false so
// routes export as flat files (support.html), preserving the ASC URLs.
const config: NextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/ambit-site' : '',
  images: { unoptimized: true },
};
export default config;
