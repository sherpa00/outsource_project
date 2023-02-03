import Image from "next/image";
import { useState } from "react";

function ContactUs() {
    return (
        <div id="contactus-container">
            <div id="contactus-list">
                <div id="contact-details">
                <h2>Contact Us</h2>
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

                <ContactForm />
            </div>
        </div>
    )
}

function ContactForm() {
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [location,setLocation] = useState("");
    const [service,setService] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>
                Contact us here
            </h3>
            <p>
                Contact us today by completing our oline quote form elow and we will get back to you as soon as possilbe.
            </p>
            <label htmlFor="email">
                Your Email:
            </label>
            <input type="email" id="email" name="email" placeholder="wxy@gmail.com" required />
            <label htmlFor="phone">
                Your Phone:
            </label>
            <input type="tel" id="phone" name="phone" placeholder="450-493-4938" required />
            <label htmlFor="location">
                Your location:
            </label>
            <input type="text" id="location" name="location" placeholder="perth city road,Perth,Au" required />
            <label htmlFor="service">
                Select Service:
            </label>
            <select id="service" name="service">
                <option value="cleaning">cleaning</option>
                <option value="cleaning2">cleaning2</option>
                <option value="cleaning3">cleaning3</option>
                <option value="cleaning4">cleaning4</option>
            </select>
            <button type="submit">
                Submit Request
            </button>
        </form>
    )
}

export default ContactUs;