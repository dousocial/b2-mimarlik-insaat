export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = (): string | null => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;

  if (!oauthPortalUrl || !appId) {
    console.warn(
      "[OAuth] Missing VITE_OAUTH_PORTAL_URL or VITE_APP_ID. Login redirect is disabled."
    );
    return null;
  }
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  let url: URL;
  try {
    url = new URL(`${oauthPortalUrl}/app-auth`);
  } catch (error) {
    console.warn(
      "[OAuth] Invalid VITE_OAUTH_PORTAL_URL. Login redirect is disabled.",
      error
    );
    return null;
  }
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
