import Link from 'next/link';
import type { SiteSettings } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

interface HeroSectionProps {
  settings: SiteSettings | null;
}

export default function HeroSection({ settings }: HeroSectionProps) {
  const siteName = getMetafieldValue(settings?.metadata?.site_name) || 'YouTube Music Connect';
  const tagline = getMetafieldValue(settings?.metadata?.tagline) || 'Your music, your way';

  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-yt-black via-yt-dark to-yt-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yt-red rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yt-red rounded-full blur-[160px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yt-red rounded-full blur-[200px] opacity-5" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
        {/* Music Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yt-red rounded-full mb-8 animate-pulse-glow">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="gradient-text">{siteName}</span>
        </h1>

        <p className="text-xl md:text-2xl text-yt-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          {tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/pages"
            className="inline-flex items-center gap-2 bg-yt-red hover:bg-yt-red-hover text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 text-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Explore Pages
          </Link>
          <Link
            href="/content-blocks"
            className="inline-flex items-center gap-2 bg-yt-card hover:bg-yt-hover text-yt-text font-bold px-8 py-4 rounded-full border border-yt-border transition-all hover:scale-105 text-lg"
          >
            Browse Blocks
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 max-w-md mx-auto gap-8">
          <div>
            <div className="text-2xl md:text-3xl font-black text-yt-red">∞</div>
            <div className="text-xs text-yt-text-muted uppercase tracking-wider mt-1">Tracks</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-black text-yt-red">24/7</div>
            <div className="text-xs text-yt-text-muted uppercase tracking-wider mt-1">Streaming</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-black text-yt-red">HD</div>
            <div className="text-xs text-yt-text-muted uppercase tracking-wider mt-1">Quality</div>
          </div>
        </div>
      </div>
    </section>
  );
}