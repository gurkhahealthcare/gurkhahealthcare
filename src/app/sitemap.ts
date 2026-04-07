import type { MetadataRoute } from 'next';
import { client } from '@/lib/sanityClient';
import { defineQuery } from 'next-sanity';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gurkhahealth.co.uk';

const JOB_SLUGS_QUERY = defineQuery(`
  *[_type == "jobPosting" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  }
`);

interface JobSitemapEntry {
  slug: string;
  _updatedAt?: string;
}

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/careers`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ];

  const jobs = await client.fetch<JobSitemapEntry[]>(JOB_SLUGS_QUERY, {}, { next: { revalidate } });
  const jobRoutes: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${siteUrl}/careers/${job.slug}`,
    lastModified: job._updatedAt ? new Date(job._updatedAt) : now,
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  return [...staticRoutes, ...jobRoutes];
}
