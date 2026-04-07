import Link from 'next/link';
import type { Page } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

interface PageCardProps {
  page: Page;
}

export default function PageCard({ page }: PageCardProps) {
  const heroImage = page.metadata?.hero_image?.imgix_url;
  const seoDescription = getMetafieldValue(page.metadata?.seo_description);

  return (
    <Link href={`/pages/${page.slug}`} className="group block">
      <div className="glass-card rounded-xl overflow-hidden hover-lift">
        {/* Image */}
        <div className="relative h-48 bg-yt-card overflow-hidden">
          {heroImage ? (
            <img
              src={`${heroImage}?w=800&h=400&fit=crop&auto=format,compress`}
              alt={page.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-yt-card to-yt-hover flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-yt-text-muted">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-yt-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5 space-y-2">
          <h3 className="text-lg font-bold text-yt-text group-hover:text-yt-red transition-colors line-clamp-1">
            {page.title}
          </h3>
          {seoDescription && (
            <p className="text-sm text-yt-text-secondary line-clamp-2">{seoDescription}</p>
          )}
          <div className="flex items-center gap-2 text-xs text-yt-text-muted pt-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {new Date(page.created_at).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}