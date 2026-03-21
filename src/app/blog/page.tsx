import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/blog/ArticleCard';
import CTASection from '@/components/lp/CTASection';
import { getAllArticles } from '@/lib/blog';

export const metadata: Metadata = {
    title: 'ブログ',
    description: '沖縄のIT支援会社・合同会社RESが、小規模事業者のIT活用に役立つ情報をお届けします。',
};

export default function BlogPage() {
    const articles = getAllArticles();

    return (
        <>
            <Header />
            <main className="min-h-screen">
                <div className="max-w-5xl mx-auto px-4 py-12">
                    <nav className="text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-black transition-colors">ホーム</Link>
                        <span className="mx-2">/</span>
                        <span>ブログ</span>
                    </nav>

                    <h1 className="text-3xl font-bold mb-8">ブログ</h1>

                    {articles.length === 0 ? (
                        <p className="text-gray-500">記事を準備中です。</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {articles.map((article) => (
                                <ArticleCard key={article.slug} article={article} />
                            ))}
                        </div>
                    )}
                </div>
                <CTASection headline="ITのお悩み、気軽にご相談ください" />
            </main>
            <Footer />
        </>
    );
}
