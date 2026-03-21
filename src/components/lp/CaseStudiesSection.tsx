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
            <p className="text-center text-gray-500 mb-12">
                業種を問わず、現場の課題を解決してきました
            </p>

            {/* Featured Cases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {featured.map((cs) => (
                    <div key={cs.id} className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-[#06C755]">
                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-xl font-bold">{cs.companyName}</h3>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{cs.industry}</span>
                            {cs.since && (
                                <span className="text-xs text-gray-400">{cs.since}</span>
                            )}
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">{cs.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {cs.services.map((s) => (
                                <span key={s} className="text-xs bg-black text-white px-3 py-1 rounded-full">{s}</span>
                            ))}
                        </div>
                        <div className="bg-brand-gray rounded-lg p-4">
                            <p className="text-sm font-bold text-[#06C755]">成果</p>
                            <p className="text-sm mt-1">{cs.result}</p>
                            {cs.contractAmount && (
                                <p className="text-sm text-gray-500 mt-1">継続契約: {cs.contractAmount}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Other Cases */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {others.map((cs) => (
                    <div key={cs.id} className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="mb-3">
                            <h3 className="text-lg font-bold">{cs.companyName}</h3>
                            <span className="text-xs text-gray-500">{cs.industry}</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-3 leading-relaxed">{cs.summary}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                            {cs.services.map((s) => (
                                <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{s}</span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600">{cs.result}</p>
                        {cs.note && (
                            <p className="text-xs text-gray-400 mt-2">{cs.note}</p>
                        )}
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
