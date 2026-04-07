import type { ContentBlock } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

interface ContentBlockRendererProps {
  block: ContentBlock;
}

export default function ContentBlockRenderer({ block }: ContentBlockRendererProps) {
  const blockType = getMetafieldValue(block.metadata?.block_type)?.toLowerCase() || 'info';
  const heading = getMetafieldValue(block.metadata?.heading);
  const body = getMetafieldValue(block.metadata?.body);
  const imageUrl = block.metadata?.image?.imgix_url;
  const buttonText = getMetafieldValue(block.metadata?.button_text);
  const buttonUrl = getMetafieldValue(block.metadata?.button_url);

  if (blockType === 'hero') {
    return (
      <section className="relative overflow-hidden rounded-2xl mb-8">
        {imageUrl && (
          <div className="absolute inset-0">
            <img
              src={`${imageUrl}?w=1600&h=800&fit=crop&auto=format,compress`}
              alt={heading || block.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yt-black via-yt-black/60 to-transparent" />
          </div>
        )}
        <div className={`relative z-10 px-8 py-20 md:py-32 ${!imageUrl ? 'bg-gradient-to-br from-yt-card to-yt-dark' : ''}`}>
          {heading && (
            <h2 className="text-4xl md:text-6xl font-black text-yt-text mb-4 max-w-3xl gradient-text">
              {heading}
            </h2>
          )}
          {body && (
            <p className="text-lg md:text-xl text-yt-text-secondary mb-8 max-w-2xl">
              {body}
            </p>
          )}
          {buttonText && buttonUrl && (
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 bg-yt-red hover:bg-yt-red-hover text-white font-semibold px-8 py-3 rounded-full transition-all hover:scale-105"
            >
              {buttonText}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
          )}
        </div>
      </section>
    );
  }

  if (blockType === 'feature') {
    return (
      <div className="glass-card rounded-xl p-6 hover-lift mb-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {imageUrl && (
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src={`${imageUrl}?w=600&h=600&fit=crop&auto=format,compress`}
                alt={heading || block.title}
                className="w-full rounded-lg object-cover aspect-square"
              />
            </div>
          )}
          <div className="flex-1 space-y-3">
            {heading && (
              <h3 className="text-xl font-bold text-yt-text">{heading}</h3>
            )}
            {body && (
              <p className="text-yt-text-secondary leading-relaxed">{body}</p>
            )}
            {buttonText && buttonUrl && (
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 text-yt-red hover:text-yt-red-hover font-medium text-sm transition-colors"
              >
                {buttonText}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (blockType === 'cta') {
    return (
      <section className="bg-gradient-to-r from-yt-red/20 to-yt-card rounded-2xl p-8 md:p-12 text-center mb-8 border border-yt-red/30">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-yt-text mb-4">{heading}</h2>
        )}
        {body && (
          <p className="text-lg text-yt-text-secondary mb-8 max-w-2xl mx-auto">{body}</p>
        )}
        {buttonText && buttonUrl && (
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 bg-yt-red hover:bg-yt-red-hover text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 animate-pulse-glow"
          >
            {buttonText}
          </a>
        )}
      </section>
    );
  }

  // Default info block
  return (
    <div className="glass-card rounded-xl overflow-hidden hover-lift mb-6">
      {imageUrl && (
        <img
          src={`${imageUrl}?w=800&h=400&fit=crop&auto=format,compress`}
          alt={heading || block.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6 space-y-3">
        {heading && (
          <h3 className="text-xl font-bold text-yt-text">{heading}</h3>
        )}
        {body && (
          <p className="text-yt-text-secondary leading-relaxed">{body}</p>
        )}
        {buttonText && buttonUrl && (
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 text-yt-red hover:text-yt-red-hover font-medium text-sm transition-colors"
          >
            {buttonText}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}