import SectionWrapper from './SectionWrapper';
import { PROBLEMS } from '@/data/problems';

export default function ProblemsSection() {
    return (
        <SectionWrapper id="problems" bgGray>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                こんなお悩みありませんか？
            </h2>
            <p className="text-center text-gray-500 mb-12">
                一つでも当てはまったら、私たちがお力になれます
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PROBLEMS.map((problem, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4"
                    >
                        <span className="text-3xl flex-shrink-0">{problem.icon}</span>
                        <p className="text-base leading-relaxed">{problem.text}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
