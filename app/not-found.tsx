import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        {/* Animated icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-yt-card rounded-full mb-8">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#717171" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 15s1.5-2 4-2 4 2 4 2" />
            <circle cx="9" cy="9" r="1" fill="#717171" />
            <circle cx="15" cy="9" r="1" fill="#717171" />
          </svg>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-yt-text mb-4">404</h1>
        <h2 className="text-xl md:text-2xl font-bold text-yt-text-secondary mb-6">
          Track Not Found
        </h2>
        <p className="text-yt-text-muted max-w-md mx-auto mb-8">
          Looks like this page hit a wrong note. Let&apos;s get you back to the music.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-yt-red hover:bg-yt-red-hover text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}