// app/pages/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPageBySlug, getPages, getMetafieldValue } from '@/lib/cosmic';
import ContentBlockRenderer from '@/components/ContentBlockRenderer';
import type { ContentBlock } from '@/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    return { title: 'Page Not Found' };
  }

  return {
    title: getMetafieldValue(page.metadata?.seo_title) || page.title,
    description: getMetafieldValue(page.metadata?.seo_description) || '',
  };
}

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((page) => ({ slug: page.slug }));
}

export default async function PageDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const heroImage = page.metadata?.hero_image?.imgix_url;
  const content = getMetafieldValue(page.metadata?.content);
  const contentBlocks = page.metadata?.content_blocks;

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative overflow-hidden">
        {heroImage ? (
          <div className="relative h-64 md:h-96">
            <img
              src={`${heroImage}?w=1600&h=800&fit=crop&auto=format,compress`}
              alt={page.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yt-black via-yt-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-7xl mx-auto">
                <Link
                  href="/pages"
                  className="inline-flex items-center gap-2 text-yt-text-secondary hover:text-yt-red text-sm mb-4 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back to Pages
                </Link>
                <h1 className="text-4xl md:text-6xl font-black text-yt-text">{page.title}</h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-yt-dark to-yt-card py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                href="/pages"
                className="inline-flex items-center gap-2 text-yt-text-secondary hover:text-yt-red text-sm mb-4 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Pages
              </Link>
              <h1 className="text-4xl md:text-6xl font-black text-yt-text">{page.title}</h1>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Content */}
        {content && (
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <div
              className="text-yt-text-secondary leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        )}

        {/* Content Blocks */}
        {contentBlocks && Array.isArray(contentBlocks) && contentBlocks.length > 0 && (
          <div className="space-y-6">
            {contentBlocks.map((block: ContentBlock) => {
              if (!block || !block.id) return null;
              return <ContentBlockRenderer key={block.id} block={block} />;
            })}
          </div>
        )}

        {/* No content message */}
        {!content && (!contentBlocks || !Array.isArray(contentBlocks) || contentBlocks.length === 0) && (
          <div className="glass-card rounded-xl p-8 text-center">
            <p className="text-yt-text-muted">
              This page doesn&apos;t have any content yet. Add content in your Cosmic dashboard.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}