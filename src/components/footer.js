function Footer() {

    return (
        <footer>
            <div id="footer-details">
                <h2>
                    Logo
                </h2>
                <ul>
                    <li onClick={() => window.location = "/"}>
                        Home
                    </li>
                    <li>
                        <a href="/services">
                            Service
                        </a>
                    </li>
                    <li>
                        <a href="/about-us">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#contact-us">
                            Contact us
                        </a>
                    </li>
                    <li>
                        <a href="/reviews">
                            Reviews
                        </a>
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