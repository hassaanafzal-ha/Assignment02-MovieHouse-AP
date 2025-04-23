import { useRouter } from "next/router";

export default function Helps() {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug) {
        return <div>Loading...</div>;
    }

    const section = slug[0] || "home";

    let content;
    switch (section.toLowerCase()) {
        case "faqs":
            content = (
                <>
                    <h2>FAQs</h2>
                    <p>Here are some frequently asked questions about Movie House.</p>
                    <ul>
                        <li>How do I search for movies?</li>
                        <li>How can I filter by genre?</li>
                        <li>Where do I find director info?</li>
                    </ul>
                </>
            );
            break;
        case "contact":
            content = (
                <>
                    <h2>Contact Us</h2>
                    <p>You can reach us at <a href="mailto:support@moviehouse.com">support@moviehouse.com</a></p>
                </>
            );
            break;
        case "privacy":
            content = (
                <>
                    <h2>Privacy Policy</h2>
                    <p>We respect your privacy. No personal data is stored or shared.</p>
                </>
            );
            break;
        default:
            content = (
                <>
                    <h2>Help Center</h2>
                    <p>Welcome to the Movie House Help Center. Choose a section:</p>
                    <ul>
                        <li><a href="/help/faqs">FAQs</a></li>
                        <li><a href="/help/contact">Contact</a></li>
                        <li><a href="/help/privacy">Privacy</a></li>
                    </ul>
                </>
            );
    }

    return (
        <div style={{ padding: "1rem" }}>
            {content}
        </div>
    );
}
