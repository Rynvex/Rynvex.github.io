/**
 * Static export for GitHub Pages.
 *
 * Switching between user-site / project-site:
 *   - User site (Rynvex.github.io):      leave NEXT_PUBLIC_BASE_PATH unset
 *   - Project site (/<repo>):            set NEXT_PUBLIC_BASE_PATH=/<repo> in CI
 *
 * @type {import('next').NextConfig}
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
