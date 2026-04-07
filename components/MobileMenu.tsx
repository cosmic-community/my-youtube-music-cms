'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { MenuItem } from '@/types';

interface MobileMenuProps {
  menuItems?: MenuItem[];
}

export default function MobileMenu({ menuItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-yt-text-secondary hover:text-yt-text transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-yt-dark border-b border-yt-border z-50 animate-fade-in">
          <nav className="flex flex-col p-4 gap-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-sm font-medium text-yt-text-secondary hover:text-yt-text hover:bg-yt-hover rounded-lg transition-all"
            >
              Home
            </Link>
            <Link
              href="/pages"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-sm font-medium text-yt-text-secondary hover:text-yt-text hover:bg-yt-hover rounded-lg transition-all"
            >
              Pages
            </Link>
            <Link
              href="/content-blocks"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-sm font-medium text-yt-text-secondary hover:text-yt-text hover:bg-yt-hover rounded-lg transition-all"
            >
              Blocks
            </Link>
            {menuItems && Array.isArray(menuItems) && menuItems.map((item, index) => {
              const title = typeof item?.title === 'string' ? item.title : `Link ${index + 1}`;
              const url = typeof item?.url === 'string' ? item.url : '#';
              return (
                <Link
                  key={index}
                  href={url}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-yt-text-secondary hover:text-yt-text hover:bg-yt-hover rounded-lg transition-all"
                >
                  {title}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}