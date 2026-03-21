import SectionWrapper from './SectionWrapper';
import { CASE_STUDIES } from '@/data/caseStudies';

export default function CaseStudiesSection() {
    const featured = CASE_STUDIES.filter((c) => c.isFeatured);
    const others = CASE_STUDIES.filter((c) => !c.isFeatured);

    return (
        <SectionWrapper id="cases" bgGray>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                導入実績
            </h2>
            <p className="text-center text-section-sub mb-12">
                業種を問わず、現場の課題を解決してきました
            </p>

            {/* Featured Cases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {featured.map((cs) => (
                    <div key={cs.id} className="bg-card-bg backdrop-blur-sm rounded-xl p-8 border-l-4 border-accent">
                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-xl font-bold text-section-text">{cs.companyName}</h3>
                            <span className="text-xs bg-card-bg text-section-sub px-2 py-1 rounded-full">{cs.industry}</span>
                            {cs.since && (
                                <span className="text-xs text-section-muted">{cs.since}</span>
                            )}
                        </div>
                        <p className="text-card-text mb-4 leading-relaxed">{cs.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {cs.services.map((s) => (
                                <span key={s} className="text-xs bg-card-bg text-section-text px-3 py-1 rounded-full">{s}</span>
                            ))}
                        </div>
                        <div className="bg-card-bg rounded-lg p-4">
                            <p className="text-sm font-bold text-accent">成果</p>
                            <p className="text-sm mt-1 text-card-text">{cs.result}</p>
                            {cs.contractAmount && (
                                <p className="text-sm text-section-muted mt-1">継続契約: {cs.contractAmount}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Other Cases */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {others.map((cs) => (
                    <div key={cs.id} className="bg-card-bg backdrop-blur-sm rounded-xl p-6">
                        <div className="mb-3">
                            <h3 className="text-lg font-bold text-section-text">{cs.companyName}</h3>
                            <span className="text-xs text-section-muted">{cs.industry}</span>
                        </div>
                        <p className="text-sm text-card-text mb-3 leading-relaxed">{cs.summary}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                            {cs.services.map((s) => (
                                <span key={s} className="text-xs bg-card-bg text-section-sub px-2 py-1 rounded-full">{s}</span>
                            ))}
                        </div>
                        <p className="text-sm text-section-sub">{cs.result}</p>
                        {cs.note && (
                            <p className="text-xs text-section-muted mt-2">{cs.note}</p>
                        )}
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
