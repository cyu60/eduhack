import { Container } from '@/components/sum25/Container'

export function Content() {
    return (
        <div className="relative flex-grow py-10 sm:pt-20 sm:pb-24">
        <Container className="relative mx-auto mt-20 mb-10 max-w-4xl px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[var(--darkRed)]">
                Our Vision
                </h2>
                <p className="text-lg text-[var(--gray)]">
                To discover and cultivate outstanding talents with both technical
                capabilities and social responsibility, while establishing
                long-term cooperation between the technology community and public
                welfare organizations.
                </p>
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[var(--darkRed)]">
                Our Mission
                </h2>
                <p className="text-lg text-[var(--gray)]">
                To explore how AI can better serve non-profit organizations by
                connecting technological innovation with social welfare and
                promoting the application of AI technology in solving social
                problems.
                </p>
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[var(--darkRed)]">
                Our Values
                </h2>
                <p className="text-lg text-[var(--gray)]">
                Integration of technology and public welfare, talent development,
                industry-academia-research collaboration, and innovative solutions
                for social impact.
                </p>
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[var(--darkRed)]">
                Our Goals
                </h2>
                <p className="text-lg text-[var(--gray)]">
                Produce excellent web pages and applications showcasing AI in
                NGOs, promote actual implementation of AI technology in public
                welfare, and provide valuable experience and development
                opportunities for participants.
                </p>
            </div>
            </div>
        </Container>
        </div>
    )
}
