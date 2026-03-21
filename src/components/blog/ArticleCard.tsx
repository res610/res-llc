import Link from 'next/link';
import { ArticleMeta } from '@/lib/blog';

export default function ArticleCard({ article }: { article: ArticleMeta }) {
    return (
        <article className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-wrap gap-2 mb-3">
                {article.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-brand-gray text-gray-600 px-2 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
            <Link href={`/blog/${article.slug}/`} className="block group">
                <h2 className="text-lg font-bold mb-2 group-hover:text-[#06C755] transition-colors">
                    {article.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">
                    {article.description}
                </p>
            </Link>
            <time className="text-xs text-gray-400">{article.publishedAt}</time>
        </article>
    );
}
