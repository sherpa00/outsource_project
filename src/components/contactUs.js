import Image from "next/image";

function ContactUs() {
    return (
        <div id="contactus-container">
            <h2>Contact Us</h2>
            <div id="contactus-list">
                <div id="contact-details">
                    <ul>
                        <li>
                            <span className="emoji">&#x1F4DE;</span>
                            <div>
                                <p>Phone</p>
                                <strong>405-767-98049</strong>
                            </div>
                        </li>
                        <li>
                            <span className="emoji">&#x1F4E7;</span>
                            <div>
                                <p>Contact Email</p>
                                <strong>loremIpsum@gmail.com</strong>
                            </div>
                        </li>
                        <li>
                            <span className="emoji">&#x1F4E0;</span>
                            <div>
                                <p>Fax</p>
                                <strong>405-767-92802</strong>
                            </div>
                        </li>
                        <li>
                            <span className="emoji">&#x1F30F;</span>
                            <div>
                                <p>Our Address</p>
                                <strong>8719 N White-Castle, East Road, Melbourne,au</strong>
                            </div>
                        </li>
                    </ul>
                    <Image
                        src="/map.jpg"
                        width={400}
                        height={400}
                        alt="map of our servie station"
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactUs;