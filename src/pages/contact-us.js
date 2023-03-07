import Head from "next/head";
import ContactUs from "@/components/contact";

function ContactUsPage() {
    return (
        <>
        <Head>
            <title>Contact Us</title>
            <meta name="description" content="Getting to know more about us by contacting us as a cleaning service located in Australia providing Major Cleaning services like Home cleaning, Office cleaning, School cleaning and many more." />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="contact our company, contact us, contact our cleaning services company in australia," />
        </Head>
            <div id="contact-us">
                <h2>No <span>Doubt</span> on Quality, <span>Contact</span> Us Now</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst. Pellentesque faucibus pulvinar justo. Sed orci massa, malesuada ac felis ut, finibus sodales erat. Ut nec leo faucibus, faucibus leo vel, porttitor orci.</p>
                <div id="world_map">
                    
                </div>
            </div>
            <ContactUs />
        </>
    )
}

export default ContactUsPage;