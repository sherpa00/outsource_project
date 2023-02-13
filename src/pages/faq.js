import Faq from "@/components/faq";
import { useRouter } from "next/router";

function FaqPage() {

    const router = useRouter();

    const handleClick = () => {
        router.push("/contact-us")
    }

    return <div id="faq-page-container">
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
}

export default FaqPage;