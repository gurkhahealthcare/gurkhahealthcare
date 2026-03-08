export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Gurkha Health Services Ltd provides supported living, private supported living and independent living care in Reading, Berkshire and surrounding areas for adults and children with learning disabilities, autism, ADHD, Down syndrome and other complex needs."
      />
      <meta
        name="keywords"
        content="Gurkha Health Services Ltd,supported living in Reading,private supported living,supported household,independent living,prompting houses,self care,special needs kids,learning disability,autism,autism spectrum,Down syndrome,ADHD,supported living Berkshire,supported living Slough,supported living Oxfordshire,supported living Buckinghamshire,supported living Greater London"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){try{const t=localStorage.getItem('theme');const p=window.matchMedia('(prefers-color-scheme: dark)').matches;const d=t==='dark'||(!t&&p);const h=document.documentElement;if(d){h.classList.add('dark');h.style.colorScheme='dark'}else{h.classList.remove('dark');h.style.colorScheme='light'}}catch(e){}})()`,
        }}
      />
      <script
        type="application/ld+json"
        // Basic Organization + Service schema for SEO
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Gurkha Health Services Ltd',
            url: '',
            logo: '/logonew.png',
            description:
              'Supported living and independent living care provider in Reading, Berkshire and surrounding areas for adults and children with learning disabilities, autism, ADHD, Down syndrome and other complex needs.',
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
          }),
        }}
      />
    </>
  )
}