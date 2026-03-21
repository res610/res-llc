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
            className={`py-16 md:py-20 px-4 ${bgGray ? 'bg-brand-gray' : 'bg-white'} ${className}`}
        >
            <div className="max-w-5xl mx-auto">
                {children}
            </div>
        </section>
    );
}
