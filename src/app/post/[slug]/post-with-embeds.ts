export interface PostWithEmbeds {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  categories: number[];
  tags: unknown[];
  class_list: string[];
  acf: unknown[];
  fimg_url: string;
  _links: Record<string, unknown>;
  _embedded: {
    author: {
      id: number;
      name: string;
      url: string;
      description: string;
      link: string;
      slug: string;
      avatar_urls: {
        "24": string;
        "48": string;
        "96": string;
      };
      is_author: boolean;
      acf: {
        consultations: string;
        contact: string;
        academicHistory: string;
        titlePrefix: string;
        titleSuffix: string;
        profileImage: number;
      };
      _links: {
        self: {
          href: string;
          targetHints: {
            allow: string[];
          };
        }[];
        collection: {
          href: string;
        }[];
      };
    }[];
    replies: {
      id: number;
      parent: number;
      author: number;
      author_name: string;
      author_url: string;
      date: string;
      content: {
        rendered: string;
      };
      link: string;
      type: string;
      author_avatar_urls: {
        "24": string;
        "48": string;
        "96": string;
      };
      acf: unknown[];
      _links: {
        self: {
          href: string;
          targetHints: {
            allow: string[];
          };
        }[];
        collection: {
          href: string;
        }[];
        author?: {
          embeddable: boolean;
          href: string;
        }[];
        up: {
          embeddable: boolean;
          post_type: string;
          href: string;
        }[];
        "in-reply-to"?: {
          embeddable: boolean;
          href: string;
        }[];
        children?: {
          embeddable: boolean;
          href: string;
        }[];
      };
    }[][];
  };
}
