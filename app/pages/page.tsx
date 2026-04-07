import type { Metadata } from 'next';
import { getPages } from '@/lib/cosmic';
import PageCard from '@/components/PageCard';

export const metadata: Metadata = {
  title: 'Pages',
  description: 'Browse all pages on YouTube Music Connect',
};

export default async function PagesIndex() {
  const pages = await getPages();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-yt-red/20 rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0000" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 3v18" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-yt-text">All Pages</h1>
        </div>
        <p className="text-yt-text-secondary text-lg max-w-2xl">
          Explore all the pages available on YouTube Music Connect, each crafted with dynamic content from Cosmic CMS.
        </p>
      </div>

      {pages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <PageCard key={page.id} page={page} />
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-2xl p-12 text-center">
          <div className="w-16 h-16 bg-yt-card rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#717171" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 3v18" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-yt-text mb-2">No Pages Found</h3>
          <p className="text-yt-text-muted">Add pages in your Cosmic dashboard to see them here.</p>
        </div>
      )}
    </div>
  );
}