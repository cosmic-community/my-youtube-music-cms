import Link from 'next/link';
import type { SiteSettings, NavigationMenu } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';
import MobileMenu from '@/components/MobileMenu';

interface HeaderProps {
  settings: SiteSettings | null;
  menus: NavigationMenu[];
}

export default function Header({ settings, menus }: HeaderProps) {
  const siteName = getMetafieldValue(settings?.metadata?.site_name) || 'YouTube Music Connect';
  const logoUrl = settings?.metadata?.logo?.imgix_url;

  const headerMenu = menus.find((menu) => {
    const location = getMetafieldValue(menu.metadata?.menu_location);
    return location?.toLowerCase().includes('header') || location?.toLowerCase().includes('main');
  });

  const menuItems = headerMenu?.metadata?.menu_items;

  return (
    <header className="sticky top-0 z-50 bg-yt-black/95 backdrop-blur-md border-b border-yt-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {logoUrl ? (
              <img
                src={`${logoUrl}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={siteName}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <div className="w-10 h-10 bg-yt-red rounded-full flex items-center justify-center group-hover:animate-pulse-glow transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </div>
            )}
            <span className="text-lg font-bold text-yt-text group-hover:text-yt-red transition-colors">
              {siteName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-yt-text-secondary hover:text-yt-text hover:bg-yt-hover rounded-lg transition-all"
            >
              Home
            </Link>
            <Link
              href="/pages"
              className="px-4 py-2 text-sm font-medium text-yt-text-secondary hover:text-yt-text hover:bg-yt-hover rounded-lg transition-all"
            >
              Pages
            </Link>
            <Link
              href="/content-blocks"
              className="px-4 py-2 text-sm font-medium text-yt-text-secondary hover:text-yt-text hover:bg-yt-hover rounded-lg transition-all"
            >
              Blocks
            </Link>
            {menuItems && Array.isArray(menuItems) && menuItems.length > 0 && (
              menuItems.map((item, index) => {
                const itemTitle = getMetafieldValue(item?.title) || `Link ${index + 1}`;
                const itemUrl = getMetafieldValue(item?.url) || '#';
                return (
                  <Link
                    key={index}
                    href={itemUrl}
                    className="px-4 py-2 text-sm font-medium text-yt-text-secondary hover:text-yt-text hover:bg-yt-hover rounded-lg transition-all"
                  >
                    {itemTitle}
                  </Link>
                );
              })
            )}
          </nav>

          {/* Mobile Menu */}
          <MobileMenu menuItems={menuItems} />
        </div>
      </div>
    </header>
  );
}