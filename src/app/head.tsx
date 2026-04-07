export default function Head() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gurkhahealth.co.uk';
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'Gurkha Health',
    legalName: 'Gurkha Health',
    url: siteUrl,
    logo: `${siteUrl}/logonew.png`,
    image: `${siteUrl}/herofinal.jpg`,
    email: 'info@gurkhahealth.co.uk',
    telephone: '+44-7721-689515',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '514 Oxford Road',
      addressLocality: 'Reading',
      postalCode: 'RG30 1EG',
      addressCountry: 'GB',
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61585860863171',
      'https://www.instagram.com/gurkhahealthservices',
    ],
    areaServed: [
      'Reading',
      'Berkshire',
      'Slough',
      'Oxfordshire',
      'Buckinghamshire',
      'Greater London',
    ],
    serviceType: [
      'Supported living in Reading',
      'Private supported living',
      'Supported household',
      'Independent living',
      'Prompting houses',
      'Self care support',
      'Support for special needs kids',
      'Learning disability support',
      'Autism and other spectrums',
      'Down syndrome support',
      'ADHD support',
    ],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){try{const t=localStorage.getItem('theme');const p=window.matchMedia('(prefers-color-scheme: dark)').matches;const d=t==='dark'||(!t&&p);const h=document.documentElement;if(d){h.classList.add('dark');h.style.colorScheme='dark'}else{h.classList.remove('dark');h.style.colorScheme='light'}}catch(e){}})()`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}