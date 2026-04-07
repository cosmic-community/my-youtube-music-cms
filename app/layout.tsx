import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CosmicBadge from '@/components/CosmicBadge';
import { getSiteSettings, getNavigationMenus } from '@/lib/cosmic';
import { getMetafieldValue } from '@/lib/cosmic';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const siteName = getMetafieldValue(settings?.metadata?.site_name) || 'YouTube Music Connect';
  const tagline = getMetafieldValue(settings?.metadata?.tagline) || 'Your music, your way';

  return {
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description: tagline,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();
  const menus = await getNavigationMenus();
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string;

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎵</text></svg>"
        />
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className="font-sans bg-yt-black text-yt-text min-h-screen flex flex-col">
        <Header settings={settings} menus={menus} />
        <main className="flex-1">{children}</main>
        <Footer settings={settings} menus={menus} />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  );
}