// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

// File metafield
export interface CosmicFile {
  url: string;
  imgix_url: string;
}

// Page object type
export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    content?: string;
    hero_image?: CosmicFile;
    content_blocks?: ContentBlock[];
    seo_title?: string;
    seo_description?: string;
  };
}

// Content Block object type
export interface ContentBlock extends CosmicObject {
  type: 'content-blocks';
  metadata: {
    block_name?: string;
    block_type?: string;
    heading?: string;
    body?: string;
    image?: CosmicFile;
    button_text?: string;
    button_url?: string;
  };
}

// Menu Item type
export interface MenuItem {
  title?: string;
  url?: string;
  page?: Page;
}

// Navigation Menu object type
export interface NavigationMenu extends CosmicObject {
  type: 'navigation-menus';
  metadata: {
    menu_location?: string;
    menu_items?: MenuItem[];
  };
}

// Social Link type
export interface SocialLink {
  platform?: string;
  url?: string;
  icon?: string;
}

// Site Settings object type
export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    site_name?: string;
    tagline?: string;
    logo?: CosmicFile;
    primary_color?: string;
    secondary_color?: string;
    footer_text?: string;
    social_links?: SocialLink[];
  };
}