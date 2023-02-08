import Link from "next/link";

function Footer() {

    return (
        <footer>
            <div id="footer-details">
                <h2>
                    <Link href="/">
                        LOGO
                    </Link>
                </h2>
                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link href="/about-us">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact-us">
                            Contact us
                        </Link>
                    </li>
                    <li>
                        <Link href="/booking">
                            Booking
                        </Link>
                    </li>
                </ul>
            </div>
            <p>
                copyright 2023 Commercial Cleanling Service of Melbourne. ALl rights reserved.
            </p>
        </footer>
    )
}

export default Footer;