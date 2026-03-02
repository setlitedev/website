export default function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Setlite Engineers Limited",
        "url": "https://www.setlite.com",
        "logo": "https://www.setlite.com/logo.png",
        "description": "Global leader in heavy equipment and mining machinery solutions, specializing in maintenance, OEM spare parts, and service solutions for over 30 years.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "5-G, 5th Floor, Vandana Building, 11 Tolstoy Marg, Connaught Place",
            "addressLocality": "New Delhi",
            "postalCode": "110001",
            "addressCountry": "IN"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+91-11-23311111",
                "contactType": "sales",
                "email": "sales@setlite.com",
                "areaServed": "Global",
                "availableLanguage": "English"
            }
        ],
        "sameAs": [
            "https://www.linkedin.com/company/setlite-engineers-limited",
            "https://www.instagram.com/setliteengineersltd/"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
