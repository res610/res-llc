import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/lp/CTASection';
import ProblemsSection from '@/components/lp/ProblemsSection';
import SolutionSection from '@/components/lp/SolutionSection';
import CaseStudiesSection from '@/components/lp/CaseStudiesSection';
import ServicesSection from '@/components/lp/ServicesSection';
import ProfileSection from '@/components/lp/ProfileSection';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

function LogoGap() {
    return <div className="h-24 md:h-32" />;
}

export default function Home() {
    return (
        <>
            <Header />
            {/* 固定背景ロゴ */}
            <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
                <img
                    src="/images/logo-cover-trimmed.webp"
                    alt=""
                    className="w-full max-w-5xl px-4 opacity-15"
                />
            </div>
            <main className="relative z-10">
                <HeroSection />
                <CTASection />
                <LogoGap />
                <ProblemsSection />
                <LogoGap />
                <SolutionSection />
                <LogoGap />
                <CaseStudiesSection />
                <CTASection headline="実績のある私たちに、まずはご相談ください" bgBlack />
                <LogoGap />
                <ServicesSection />
                <LogoGap />
                <ProfileSection />
                <InstagramFeed />
                <CTASection headline="あなたの業務、一緒に改善しませんか？" />
            </main>
            <Footer />
        </>
    );
}
