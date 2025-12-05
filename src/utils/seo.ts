// SEO utilities and structured data
export const generateStructuredData = (type: 'Organization' | 'WebSite' | 'Service', data: any) => {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseStructure,
        name: 'IRSDL IT',
        url: 'https://irsdl-it.com',
        logo: 'https://irsdl-it.com/IRSDL LOGO-01.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-0123',
          contactType: 'customer service',
        },
        ...data,
      };
    case 'WebSite':
      return {
        ...baseStructure,
        name: 'IRSDL IT',
        url: 'https://irsdl-it.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://irsdl-it.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        ...data,
      };
    case 'Service':
      return {
        ...baseStructure,
        provider: {
          '@type': 'Organization',
          name: 'IRSDL IT',
        },
        ...data,
      };
    default:
      return baseStructure;
  }
};

export const injectStructuredData = (data: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
  return script;
};