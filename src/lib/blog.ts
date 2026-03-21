import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface ArticleMeta {
    title: string;
    description: string;
    slug: string;
    publishedAt: string;
    updatedAt?: string;
    tags: string[];
}

export interface Article extends ArticleMeta {
    content: string;
}

export function getAllArticles(): ArticleMeta[] {
    if (!fs.existsSync(BLOG_DIR)) return [];

    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
    const articles = files.map((file) => {
        const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
        const { data } = matter(raw);
        return {
            title: data.title,
            description: data.description,
            slug: data.slug || file.replace('.md', ''),
            publishedAt: data.publishedAt,
            updatedAt: data.updatedAt,
            tags: data.tags || [],
        } as ArticleMeta;
    });

    return articles.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getArticleBySlug(slug: string): Article | null {
    if (!fs.existsSync(BLOG_DIR)) return null;

    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));

    for (const file of files) {
        const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
        const { data, content: mdContent } = matter(raw);
        const fileSlug = data.slug || file.replace('.md', '');

        if (fileSlug === slug) {
            return {
                title: data.title,
                description: data.description,
                slug: fileSlug,
                publishedAt: data.publishedAt,
                updatedAt: data.updatedAt,
                tags: data.tags || [],
                content: marked(mdContent) as string,
            };
        }
    }

    return null;
}

export function getAllSlugs(): string[] {
    if (!fs.existsSync(BLOG_DIR)) return [];

    return fs
        .readdirSync(BLOG_DIR)
        .filter((f) => f.endsWith('.md'))
        .map((f) => {
            const raw = fs.readFileSync(path.join(BLOG_DIR, f), 'utf-8');
            const { data } = matter(raw);
            return data.slug || f.replace('.md', '');
        });
}
