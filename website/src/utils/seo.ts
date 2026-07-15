import type { Product } from '../data/products';
import { absolutePageUrl, absoluteUrl, siteConfig } from '../config/site';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ArticleSeoInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  publishedDate: Date;
  updatedDate: Date;
  section: string;
  tags: string[];
}

export type StructuredData = Record<string, unknown>;

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absolutePageUrl(item.href) } : {}),
    })),
  };
}

export function buildArticleSchema(input: ArticleSeoInput): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    ...(input.image ? { image: [absoluteUrl(input.image)] } : {}),
    datePublished: input.publishedDate.toISOString(),
    dateModified: input.updatedDate.toISOString(),
    articleSection: input.section,
    keywords: input.tags.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absolutePageUrl(input.path),
    },
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: absolutePageUrl('/about'),
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: absolutePageUrl('/'),
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/brand/logo-mark.svg'),
      },
    },
  };
}

export function buildProductSchema(product: Product): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: [absoluteUrl(product.image.src)],
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    category: product.category,
  };
}
