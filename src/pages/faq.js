import Head from "next/head";
import ContactUs from "@/components/contact";
import Faq from "@/components/faq";
import { useRouter } from "next/router";

function FaqPage() {

    const router = useRouter();

    const handleClick = () => {
        router.push("/contact-us")
    }

    return (
        <>
        <Head>
            <title>About Us</title>
            <meta name="description" content="read our frequently asked questions about cleaning services in australia." />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="faqs,faq, frequently asked questions about cleaning services, questions about cleaning services in australia" />
        </Head>
            <div id="faq-page-container">
                <h2>
                    Frequently Asked <span>Questions</span>
                </h2>
                <p id="faq-message">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis ac eros ac tempor. Morbi sit amet enim at odio egestas condimentum non a eros. Fusce erat mi, sodales eu mauris in, tempor pulvinar sapien. Aliquam id libero at urna faucibus egestas.
                </p>
                <button onClick={handleClick}>
                    Contact Us for Questions
                </button>
                <Faq />
            </div>
            <ContactUs />
        </>
    )
}

export default FaqPage;