// Google Analytics 4 integration hook
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const useAnalytics = () => {
  // Initialize GA4 script
  const initializeGA4 = (measurementId: string) => {
    if (!measurementId) return;

    // Add GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId);
  };

  // Track page views (called when route changes)
  const trackPageView = (pagePath: string, pageTitle: string) => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle,
      });
    }
  };

  // Track custom events (e.g., link clicks, PDF downloads)
  const trackEvent = (eventName: string, eventParams?: Record<string, unknown>) => {
    if (window.gtag) {
      window.gtag('event', eventName, eventParams);
    }
  };

  // Track PDF interactions
  const trackPDFInteraction = (action: string) => {
    trackEvent('pdf_interaction', {
      action: action, // 'preview' or 'download'
      timestamp: new Date().toISOString(),
    });
  };

  // Track external link clicks
  const trackExternalLink = (url: string) => {
    trackEvent('external_link_click', {
      link_url: url,
      timestamp: new Date().toISOString(),
    });
  };

  return {
    initializeGA4,
    trackPageView,
    trackEvent,
    trackPDFInteraction,
    trackExternalLink,
  };
};
