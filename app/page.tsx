import { getPages, getContentBlocks, getSiteSettings } from '@/lib/cosmic';
import HeroSection from '@/components/HeroSection';
import PageCard from '@/components/PageCard';
import ContentBlockRenderer from '@/components/ContentBlockRenderer';

export default async function HomePage() {
  const [pages, contentBlocks, settings] = await Promise.all([
    getPages(),
    getContentBlocks(),
    getSiteSettings(),
  ]);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection settings={settings} />

      {/* Content Blocks */}
      {contentBlocks.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-yt-red rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-yt-text">Featured Content</h2>
          </div>
          <div className="space-y-6">
            {contentBlocks.map((block) => (
              <ContentBlockRenderer key={block.id} block={block} />
            ))}
          </div>
        </section>
      )}

      {/* Pages Grid */}
      {pages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-yt-red rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-yt-text">Pages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => (
              <PageCard key={page.id} page={page} />
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {pages.length === 0 && contentBlocks.length === 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="glass-card rounded-2xl p-12 max-w-lg mx-auto">
            <div className="w-16 h-16 bg-yt-card rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#717171" strokeWidth="1.5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-yt-text mb-2">No Content Yet</h3>
            <p className="text-yt-text-muted">
              Add pages and content blocks in your Cosmic dashboard to see them here.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}