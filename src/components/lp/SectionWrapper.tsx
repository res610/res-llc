interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    bgGray?: boolean;
    className?: string;
}

export default function SectionWrapper({ children, id, bgGray = false, className = '' }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`py-16 md:py-20 px-4 ${bgGray ? 'bg-section-bg-alt' : 'bg-section-bg'} text-section-text ${className}`}
        >
            <div className="max-w-5xl mx-auto">
                {children}
            </div>
        </section>
    );
}
