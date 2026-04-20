export function getImagePath(path: string): string {
  // In development, Astro doesn't apply the base path
  // In production, we need the /Portifolio/ prefix which is handled by the build
  // For public assets, we just need to ensure the path is correct
  return path.startsWith('/') ? path : `/${path}`;
}

export function resolveAssetPath(relativePath: string): string {
  // This resolves paths for static assets in public/
  const isDev = import.meta.env.DEV;

  if (isDev) {
    // In dev, serve directly from public without the base prefix
    return `/Portifolio${relativePath}`;
  }

  // In production, the base path is applied automatically
  return relativePath;
}
