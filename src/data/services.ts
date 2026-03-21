export interface Service {
    title: string;
    description: string;
    icon: string;
}

export const SERVICES: Service[] = [
    {
        title: 'ホームページ制作',
        description: '集客に強いホームページを、事業に合わせて制作。SNSやLINEとの連携もサポートします。',
        icon: '🌐',
    },
    {
        title: '業務効率化システム開発',
        description: '紙やExcelの業務をデジタル化。現場に合った仕組みで、ミスと手間を減らします。',
        icon: '⚙️',
    },
    {
        title: 'IT導入支援',
        description: '何を使えばいいかわからない方へ。現状を見て、最適なツールと進め方をご提案します。',
        icon: '💡',
    },
];
