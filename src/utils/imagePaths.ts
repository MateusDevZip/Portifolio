export function resolveAssetPath(imagePath: string): string {
  // If path already includes /Portifolio/, return as is
  if (imagePath.includes('/Portifolio/')) {
    return imagePath;
  }

  // Add /Portifolio/ prefix for both dev and prod
  // - In dev: browser resolves /Portifolio/ directly to the server
  // - In prod: Astro's base config doesn't double-apply it
  if (imagePath.startsWith('/projects/')) {
    return `/Portifolio${imagePath}`;
  }

  return imagePath;
}
