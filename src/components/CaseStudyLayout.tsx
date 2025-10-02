/** @jsx jsx */
import { jsx } from "theme-ui";
// src/components/CaseStudyLayout.tsx
import * as React from "react";

type Props = {
    title: string;
    subtitle?: string;
    date?: string;
    role?: string;
    impactHeadline?: string;
    children: React.ReactNode;
};

export default function CaseStudyLayout({
    title,
    subtitle,
    date,
    role,
    impactHeadline,
    children,
}: Props) {
    return (
        <main
            sx={{
                mx: "auto",
                maxWidth: ["42rem", "48rem", "64rem"],
                px: [3, 4],
                py: [4, 5],
            }}
        >
            <div sx={{ mx: "auto", maxWidth: "65ch" }}>
                <header
                    sx={{
                        mb: 4,
                        "> * + *": { mt: 2 },
                    }}
                >
                    <h1
                        sx={{
                            fontSize: [4, 5],
                            fontWeight: 800,
                            lineHeight: 1.1,
                            m: 0,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        {title}
                    </h1>
                    {subtitle && (
                        <p sx={{ fontSize: [2, 3], color: "muted", m: 0 }}>
                            {subtitle}
                        </p>
                    )}
                    <dl
                        aria-label="Meta"
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            columnGap: 4,
                            rowGap: 2,
                            fontSize: 1,
                            color: "muted",
                            m: 0,
                        }}
                    >
                        {date && (
                            <div>
                                <dt className="sr-only">Date</dt>
                                <dd>{date}</dd>
                            </div>
                        )}
                        {role && (
                            <div>
                                <dt className="sr-only">Role</dt>
                                <dd>{role}</dd>
                            </div>
                        )}
                    </dl>
                    {impactHeadline && (
                        <p
                            sx={{
                                mt: 2,
                                borderRadius: 2,
                                border: "1px solid",
                                borderColor: "muted",
                                bg: "background",
                                px: 3,
                                py: 2,
                                fontSize: 1,
                            }}
                        >
                            {impactHeadline}
                        </p>
                    )}
                </header>
                <article
                    sx={{
                        lineHeight: 1.7,
                        "h2, h3": { mt: 4, mb: 2, lineHeight: 1.2 },
                        "p": { my: 3 },
                        "ul, ol": { my: 3, pl: 3 },
                        "li + li": { mt: 2 },
                        "a": { color: "primary", textDecoration: "underline" },
                        "code": {
                            bg: "muted",
                            px: 1,
                            py: "2px",
                            borderRadius: 1,
                            fontSize: "0.95em",
                            color: "secondary",
                        },
                        "pre": {
                            p: 3,
                            bg: "muted",
                            borderRadius: 2,
                            overflowX: "auto",
                        },
                        img: { maxWidth: "100%", height: "auto", my: 3 },
                        table: { my: 3, width: "100%", borderCollapse: "collapse" },
                        "th, td": {
                            textAlign: "left",
                            borderBottom: "1px solid",
                            borderColor: "muted",
                            py: 2,
                            pr: 3,
                        },
                    }}
                >
                    {children}
                </article>
            </div>
            <nav sx={{ mt: 5 }}>
                <a href="/#work" sx={{ fontSize: 1, textDecoration: "underline" }}>
                    ← Back to work
                </a>
            </nav>
        </main>
    );
}