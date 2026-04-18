/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@vite-pwa/astro/client" />

declare module '*.astro' {
  const Component: any;
  export default Component;
}
