declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: Record<string, any>) => void;
  }
}

// log the pageview with their URL
export const pageview = (url: string): void => {
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({
  action,
  params,
}: {
  action: any;
  params: any;
}): void => {
  window.gtag("event", action, params);
};

export const analyticsSrc = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`;
export const analyticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
    page_path: window.location.pathname,
    });
`;
