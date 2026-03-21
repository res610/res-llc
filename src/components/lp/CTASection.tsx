import CTAButton from './CTAButton';
import { FREE_CONSULTATION_MINUTES } from '@/constants';

interface CTASectionProps {
    headline?: string;
    bgBlack?: boolean;
}

export default function CTASection({ headline, bgBlack = false }: CTASectionProps) {
    return (
        <section className={`py-16 px-4 ${bgBlack ? 'bg-black text-white' : 'bg-brand-gray'}`}>
            <div className="max-w-3xl mx-auto text-center">
                <p className={`text-sm font-bold mb-2 ${bgBlack ? 'text-green-400' : 'text-[#06C755]'}`}>
                    無料・{FREE_CONSULTATION_MINUTES}分
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {headline || 'まずは気軽にご相談ください'}
                </h2>
                <p className={`mb-8 ${bgBlack ? 'text-gray-300' : 'text-gray-600'}`}>
                    {FREE_CONSULTATION_MINUTES}分の無料相談で、あなたの業務に合ったIT活用をご提案します
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <CTAButton variant="line" />
                    <CTAButton variant="email" />
                </div>
            </div>
        </section>
    );
}
