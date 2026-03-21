import SectionWrapper from './SectionWrapper';
import { STORE_NAME } from '@/constants';

export default function ProfileSection() {
    return (
        <SectionWrapper id="profile" bgGray>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                代表紹介
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto">
                {/* 写真（仮） */}
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center text-gray-500 text-sm">
                    写真準備中
                </div>

                <div>
                    <p className="text-sm text-gray-500 mb-1">{STORE_NAME} 代表</p>
                    <h3 className="text-2xl font-bold mb-4">城間 敏光</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        沖縄を拠点に、個人事業主や小規模事業者のIT活用を支援しています。
                        「難しいことをわかりやすく」をモットーに、
                        現場に足を運び、業務を理解した上で最適な仕組みをご提案します。
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        大切にしているのは、お客様の事業が「自分の力で回せる」ようになること。
                        無理なシステムではなく、使い続けられる仕組みを一緒に作ります。
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
