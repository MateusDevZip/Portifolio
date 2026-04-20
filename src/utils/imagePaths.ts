export function resolveAssetPath(imagePath: string): string {
  // Ensure path starts with /
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

  // Apply base path - both dev and prod need it
  if (normalizedPath.startsWith('/Portifolio/')) {
    return normalizedPath;
  }

  return `/Portifolio${normalizedPath}`;
}
