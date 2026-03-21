import SectionWrapper from './SectionWrapper';
import { SERVICES } from '@/data/services';

export default function ServicesSection() {
    return (
        <SectionWrapper id="services">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                サービス内容
            </h2>
            <p className="text-center text-gray-500 mb-12">
                あなたの事業に合わせて、必要なサポートを提供します
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SERVICES.map((service, index) => (
                    <div key={index} className="bg-brand-gray rounded-xl p-8 text-center">
                        <span className="text-5xl block mb-4">{service.icon}</span>
                        <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
