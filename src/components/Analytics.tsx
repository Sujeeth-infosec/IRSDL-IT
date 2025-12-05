import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsProps {
  trackingId?: string;
}

export const Analytics = ({ trackingId = 'GA_MEASUREMENT_ID' }: AnalyticsProps) => {
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) return;

    const preferences = JSON.parse(consent);
    if (!preferences.statistic) return;

    // Load Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [trackingId]);

  return null;
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  const consent = localStorage.getItem('cookie-consent');
  if (!consent) return;

  const preferences = JSON.parse(consent);
  if (!preferences.statistic) return;

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};