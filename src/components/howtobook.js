import { useEffect } from "react";
import {FcBusinessContact,FcAssistant,FcCollaboration,FcApproval} from "react-icons/fc";
import { useAnimation,motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HowToBook() {

    const control = useAnimation();
    const [ref,inView] = useInView();

    const animationVariants0 = {
        hidden: {opacity: 0},
        visible: {opacity: 1,transition: {duration: 0.8}}
    }

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    },[control,inView]);

    return (
        <motion.div 
            id="howtobook"
            ref={ref}
            animate={control}
            variants={animationVariants0}
            initial="hidden"
        >
            <h2>
                How to order our services?
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ultricies massa. Cras imperdiet libero sit amet lacus pulvinar blandit. Curabitur quis velit ante. Pellentesque imperdiet diam sit amet interdum dignissim. Fusce nisl felis, convallis et risus at, fermentum malesuada leo.
            </p>
            
            <ul>
                <li>
                    <span>
                        1
                    </span>
                    <FcBusinessContact id="step_icon" />
                    <h4>
                        You send us a quote or booking
                    </h4>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </small>
                </li>
                <li>
                    <span>
                        2
                    </span>
                    <FcAssistant id="step_icon" />
                    <h4>
                        Get Answers from Proffesionals
                    </h4>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </small>
                </li>
                <li>
                    <span>
                        3
                    </span>
                    <FcCollaboration id="step_icon" />
                    <h4>
                        Collabrate with our Proffesionals
                    </h4>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </small>
                </li>
                <li>
                    <span>
                        4
                    </span>
                    <FcApproval id="step_icon" />
                    <h4>
                        Get our Verified Cleaning Services
                    </h4>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </small>
                </li>
            </ul>
        </motion.div>
    )
}

export default HowToBook;