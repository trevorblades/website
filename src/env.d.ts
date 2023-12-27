/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GOOGLE_CLIENT_ID: string;
  readonly GOOGLE_CLIENT_SECRET: string;
  readonly GOOGLE_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
