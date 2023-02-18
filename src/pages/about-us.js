import Image from "next/image";
import {RiCustomerService2Fill} from "react-icons/ri";
import {HiUserGroup} from "react-icons/hi";
import {AiOutlineFieldTime} from "react-icons/ai"
import ContactUs, { ContactForm } from "@/components/contact";

function AboutUs() {
    return (
        <>
            <div id="about-us">
                <Image
                    src="/services.webp"
                    width={400}
                    height={400}
                    alt="picture about us"
                    id="top-image"
                />
                <h2>
                    About <span>Us</span>
                </h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst. Pellentesque faucibus pulvinar justo. Sed orci massa, malesuada ac felis ut, finibus sodales erat. Ut nec leo faucibus, faucibus leo vel, porttitor orci.
    <br></br><br></br>
    Nullam id luctus metus, mollis finibus tortor. Etiam quis purus tristique, egestas neque eu, semper dolor. Integer in ullamcorper neque. Phasellus in tortor at nulla dictum aliquam vel sed nibh. Cras sed sem et urna pulvinar consequat. Sed a maximus lectus. Pellentesque sollicitudin metus porttitor quam lobortis, elementum aliquam mauris ultricies. Mauris vitae turpis metus. Sed vel rutrum justo.
    <br></br><br></br>
    In tincidunt felis ac lacinia hendrerit. Integer arcu tellus, tempus tincidunt posuere id, tincidunt nec nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent ante justo, commodo at sapien vel, faucibus varius ante. Ut facilisis libero mauris, id ornare sapien placerat vel. Aliquam tincidunt porttitor neque congue tincidunt. Praesent fermentum sapien id accumsan fermentum. Praesent nibh diam, molestie sed tortor ut, venenatis tempus nibh. In hac habitasse platea dictumst. Praesent porttitor odio tristique accumsan hendrerit. Ut faucibus semper urna et venenatis. Vivamus ac ultrices ipsum.
    <br></br><br></br>
    Donec quis lacinia nulla. Phasellus fermentum risus in suscipit congue. Praesent id hendrerit elit. In mauris justo, vulputate sit amet urna id, lobortis pellentesque risus. Phasellus ultricies sed turpis ut pharetra. Morbi odio nisl, molestie et dignissim nec, aliquam ac erat. Sed nec sollicitudin eros. Integer laoreet metus dapibus, pulvinar quam id, ornare libero. Donec efficitur porttitor tincidunt. Donec pretium elit non imperdiet blandit. Morbi massa ex, mollis non ultricies vitae, ornare ut ante.
                </p>

                <h3>Why Choose us?</h3>
                <WhyChooseUse />
            </div>
            <br></br>
            <ContactUs />
        </>
    )
}

export function WhyChooseUse() {
    return (
        <ul>
                    <li>
                        <AiOutlineFieldTime className="icon"></AiOutlineFieldTime>
                        <div>
                            <h4>24 hour service</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat.</p>
                        </div>
                    </li>
                    <li>
                        <RiCustomerService2Fill className="icon"></RiCustomerService2Fill>
                        <div>
                            <h4>Excelent Customer Service</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat.</p>
                        </div>
                    </li>
                    <li>
                        <HiUserGroup className="icon"></HiUserGroup>
                        <div>
                            <h4>Experienced Team</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat.</p>
                        </div>
                    </li>
                    
                </ul>
    )
}

export default AboutUs;