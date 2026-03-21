import CTAButton from './lp/CTAButton';
import { FREE_CONSULTATION_MINUTES } from '@/constants';

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[100svh] flex items-center justify-center bg-black text-white overflow-hidden">
            {/* 背景グラデーション */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

            <div className="relative z-10 text-center px-4 py-20 max-w-3xl mx-auto">
                <p className="text-sm md:text-base text-gray-400 mb-6 tracking-wider">
                    沖縄の個人事業主・小規模事業者の方へ
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    ITが苦手でも大丈夫。
                    <br />
                    <span className="text-[#06C755]">現場に合わせて</span>
                    <br className="md:hidden" />
                    仕組みを作ります。
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                    ホームページ制作から業務のデジタル化まで、
                    <br className="hidden md:block" />
                    あなたの事業に合った方法で、一緒に解決します。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <CTAButton variant="line" text="無料相談はこちら" />
                </div>
                <p className="mt-4 text-sm text-gray-500">
                    無料・{FREE_CONSULTATION_MINUTES}分 / LINEで気軽にご相談ください
                </p>
            </div>
        </section>
    );
}
