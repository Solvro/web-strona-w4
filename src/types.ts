export interface Event {
  title: string;
  description?: string;
  date: Date;
  location: string;
}

export type Seminar = {
    title: string,
    description: string,
    start_date: Date,
    venue: {
        venue: string,
        city: string,
        country: string,
        province: string,
    },
};

export type Member = {
    id: number,
    name: string,
    slug: string,
    avatar_urls: {
        "24": string,
        "48": string,
        "96": string,
    },
    acf: {
        consultations: string,
        contact: string,
        academicHistory: string,
        titlePrefix: string,
        titleSuffix: string,
        profileImage: string,
        profileHeader: string,
    },
    is_author: boolean,
};

export type Post = {
    id: number,
    date: string,
    slug: string,
    title: {
        rendered: string,
    },
    content: {
        rendered: string,
    },
    author: string,
    comment_status: "open" | "closed",
    fimg_url: string | false,
    tags: number[],
};

export type Comment = {
    id: number,
    post: number,
    parent: number, // 0 if it's a top-level comment
    author: number, // 0 if it's an anonymous comment
    author_name: string,
    date: string,
    content: {
        rendered: string,
    },
    author_avatar_urls: {
        "24": string,
        "48": string,
        "96": string,
    },
};