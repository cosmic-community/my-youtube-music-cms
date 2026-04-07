import Link from 'next/link';
import type { SiteSettings, NavigationMenu } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

interface FooterProps {
  settings: SiteSettings | null;
  menus: NavigationMenu[];
}

export default function Footer({ settings, menus }: FooterProps) {
  const siteName = getMetafieldValue(settings?.metadata?.site_name) || 'YouTube Music Connect';
  const footerText = getMetafieldValue(settings?.metadata?.footer_text) || `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`;
  const socialLinks = settings?.metadata?.social_links;

  const footerMenu = menus.find((menu) => {
    const location = getMetafieldValue(menu.metadata?.menu_location);
    return location?.toLowerCase().includes('footer');
  });

  const menuItems = footerMenu?.metadata?.menu_items;

  return (
    <footer className="bg-yt-dark border-t border-yt-border/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-yt-red rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-yt-text">{siteName}</span>
            </Link>
            <p className="text-sm text-yt-text-muted max-w-xs">
              {getMetafieldValue(settings?.metadata?.tagline) || 'Your music, your way. Connect with the sounds you love.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-yt-text uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-yt-text-secondary hover:text-yt-red transition-colors">
                Home
              </Link>
              <Link href="/pages" className="text-sm text-yt-text-secondary hover:text-yt-red transition-colors">
                Pages
              </Link>
              <Link href="/content-blocks" className="text-sm text-yt-text-secondary hover:text-yt-red transition-colors">
                Content Blocks
              </Link>
              {menuItems && Array.isArray(menuItems) && menuItems.map((item, index) => {
                const title = getMetafieldValue(item?.title) || `Link ${index + 1}`;
                const url = getMetafieldValue(item?.url) || '#';
                return (
                  <Link
                    key={index}
                    href={url}
                    className="text-sm text-yt-text-secondary hover:text-yt-red transition-colors"
                  >
                    {title}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-yt-text uppercase tracking-wider">Connect</h3>
            {socialLinks && Array.isArray(socialLinks) && socialLinks.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => {
                  const platform = getMetafieldValue(link?.platform) || 'Social';
                  const url = getMetafieldValue(link?.url) || '#';
                  return (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-yt-card hover:bg-yt-red rounded-full flex items-center justify-center text-yt-text-secondary hover:text-white transition-all"
                      aria-label={platform}
                    >
                      <span className="text-xs font-bold">{platform.charAt(0).toUpperCase()}</span>
                    </a>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-yt-text-muted">No social links configured</p>
            )}
          </div>
        </div>

        <div className="border-t border-yt-border/50 mt-8 pt-8">
          <p className="text-sm text-yt-text-muted text-center">{footerText}</p>
        </div>
      </div>
    </footer>
  );
}