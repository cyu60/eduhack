import {
    Footer,
    FooterColumn,
    FooterBottom,
    FooterContent,
} from "@/components/ui/footer";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FooterLink {
    text: string;
    href: string;
}

interface FooterColumnProps {
    title: string;
    links: FooterLink[];
}

interface FooterSectionProps {
    logo?: ReactNode;
    name?: string;
    columns?: FooterColumnProps[];
    copyright?: string;
    policies?: FooterLink[];
    showModeToggle?: boolean;
    className?: string;
}

export default function FooterSection({
    logo = <span className="text-2xl font-bold">EduHack</span>,
    name = "EduHack",
    columns = [
        {
        title: "About",
        links: [
            { text: "Our Team", href: "/team" },
            { text: "Mission", href: "/mission" },
        ],
        },
        {
        title: "Events",
        links: [
            { text: "Upcoming", href: "/sum25" },
            { text: "Past", href: "/past" },
        ],
        },
        {
        title: "Connect",
        links: [
            { text: "Contact", href: "/contact" },
            { text: "Twitter", href: "https://twitter.com/eduhack" },
        ],
        },
    ],
    copyright = "© 2025 EduHack. All rights reserved",
    policies = [
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Terms of Service", href: "/terms" },
    ],
    showModeToggle = true,
    className,
    }: FooterSectionProps) {
    return (
        <footer className={cn("w-full px-4", className)}>
            <div className="max-w-container mx-auto pt-10">
                <Footer>
                    <FooterContent>
                        <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
                        <div className="flex items-center gap-2">
                            {/* {logo} */}
                            <h3 className="text-xl font-bold">{name}</h3>
                        </div>
                        </FooterColumn>
                        {columns.map((column, index) => (
                        <FooterColumn key={index}>
                            <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                            {column.links.map((link, linkIndex) => (
                            <a
                                key={linkIndex}
                                href={link.href}
                                className="text-muted-foreground text-sm hover:underline"
                            >
                                {link.text}
                            </a>
                            ))}
                        </FooterColumn>
                        ))}
                    </FooterContent>
                    <FooterBottom>
                        <div>{copyright}</div>
                        <div className="flex items-center gap-4">
                        {policies.map((policy, index) => (
                            <a key={index} href={policy.href} className="text-sm hover:underline">
                            {policy.text}
                            </a>
                        ))}
                        </div>
                    </FooterBottom>
                </Footer>
            </div>
        </footer>
    );
}
