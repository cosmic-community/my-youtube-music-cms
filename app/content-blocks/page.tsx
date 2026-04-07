import type { Metadata } from 'next';
import { getContentBlocks, getMetafieldValue } from '@/lib/cosmic';
import ContentBlockRenderer from '@/components/ContentBlockRenderer';

export const metadata: Metadata = {
  title: 'Content Blocks',
  description: 'Browse all reusable content blocks on YouTube Music Connect',
};

export default async function ContentBlocksPage() {
  const blocks = await getContentBlocks();

  // Group blocks by type
  const blocksByType: Record<string, typeof blocks> = {};
  for (const block of blocks) {
    const blockType = getMetafieldValue(block.metadata?.block_type) || 'Other';
    if (!blocksByType[blockType]) {
      blocksByType[blockType] = [];
    }
    blocksByType[blockType].push(block);
  }

  const typeKeys = Object.keys(blocksByType);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-yt-red/20 rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0000" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-yt-text">Content Blocks</h1>
        </div>
        <p className="text-yt-text-secondary text-lg max-w-2xl">
          Reusable content blocks that power the pages across YouTube Music Connect. These blocks can be hero sections, feature highlights, CTAs, and more.
        </p>
      </div>

      {blocks.length > 0 ? (
        <div className="space-y-12">
          {typeKeys.map((typeKey) => {
            const typeBlocks = blocksByType[typeKey];
            if (!typeBlocks || typeBlocks.length === 0) {
              return null;
            }

            return (
              <div key={typeKey}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-yt-red rounded-full" />
                  <h2 className="text-xl font-bold text-yt-text capitalize">{typeKey} Blocks</h2>
                  <span className="text-xs bg-yt-card text-yt-text-muted px-2 py-1 rounded-full">
                    {typeBlocks.length}
                  </span>
                </div>
                <div className="space-y-6">
                  {typeBlocks.map((block) => (
                    <ContentBlockRenderer key={block.id} block={block} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="glass-card rounded-2xl p-12 text-center">
          <div className="w-16 h-16 bg-yt-card rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#717171" strokeWidth="1.5">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-yt-text mb-2">No Content Blocks Found</h3>
          <p className="text-yt-text-muted">
            Add content blocks in your Cosmic dashboard to see them here.
          </p>
        </div>
      )}
    </div>
  );
}