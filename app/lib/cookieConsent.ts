export const COOKIE_CONSENT_KEY = 'cookieConsent'
export const COOKIE_SETTINGS_EVENT = 'cookie-settings:open'

export type CookieConsentStatus = 'accepted' | 'rejected'

export function isCookieConsentStatus(value: string | null): value is CookieConsentStatus {
  return value === 'accepted' || value === 'rejected'
}

