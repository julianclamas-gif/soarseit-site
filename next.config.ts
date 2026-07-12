import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. A stray lockfile in the parent
  // directory otherwise causes Next to infer the wrong root, which breaks
  // dev-mode asset serving and client hydration.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
