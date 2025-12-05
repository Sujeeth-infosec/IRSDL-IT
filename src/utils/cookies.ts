// Cookie management utilities
export interface CookiePreferences {
  necessary: boolean;
  preference: boolean;
  statistic: boolean;
  marketing: boolean;
}

export const getCookieConsent = (): CookiePreferences | null => {
  const consent = localStorage.getItem('cookie-consent');
  return consent ? JSON.parse(consent) : null;
};

export const setCookieConsent = (preferences: CookiePreferences) => {
  localStorage.setItem('cookie-consent', JSON.stringify(preferences));
};

export const hasConsentFor = (category: keyof CookiePreferences): boolean => {
  const consent = getCookieConsent();
  return consent ? consent[category] : false;
};

export const setCookie = (name: string, value: string, days: number = 30, category: keyof CookiePreferences = 'necessary') => {
  if (!hasConsentFor(category)) return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

export const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};