const optionalEnv = (value: string | undefined): string | undefined => {
  const normalized = value?.trim();
  return normalized ? normalized : undefined;
};

export const siteConfig = {
  name: 'Engineering Maker Lab',
  url: optionalEnv(import.meta.env.PUBLIC_SITE_URL) ?? 'https://engineeringmakerlab.example',
  integrations: {
    googleTagId: optionalEnv(import.meta.env.PUBLIC_GOOGLE_TAG_ID),
    googleSiteVerification: optionalEnv(import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION),
  },
} as const;

export function absoluteUrl(path = '/'): string {
  return new URL(path, `${siteConfig.url}/`).toString();
}

export function absolutePageUrl(path = '/'): string {
  const url = new URL(path, `${siteConfig.url}/`);
  if (!url.pathname.endsWith('/') && !/\.[a-z0-9]+$/i.test(url.pathname)) url.pathname += '/';
  return url.toString();
}
