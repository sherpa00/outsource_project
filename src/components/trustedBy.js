import Testomonials from "./testomonials";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function TrustedBy() {
    const control = useAnimation();
    const [ref,inView] = useInView();

    const animationVariants1 = {
        hidden: {opacity: 0, scale: 0},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.1}}
    }
    const animationVariants2 = {
        hidden: {opacity: 0, scale: 0},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.2}}
    }
    const animationVariants3 = {
        hidden: {opacity: 0, scale: 0},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.3}}
    }
    const animationVariants4 = {
        hidden: {opacity: 0, scale: 0},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.4}}
    }

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    },[control,inView]);

    return (
        <div 
            id="trustedby-container"
        >
            <h2>Trusted By the numerous happy clients<span id="emoji_love">&#128150;</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus luctus ante ut aliquam. Mauris consectetur sem diam, ut convallis turpis laoreet a. Suspendisse tempus tortor nibh, interdum fermentum tortor sodales ac.
            </p>
            <ul>
                <li>
                    <h4>Customers</h4>
                    <h3>4k+</h3>
                    <motion.span
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants1}
                        animate={control}
                    >
                        &#128587;
                    </motion.span>
                </li>
                <li>
                    <h4>Houses</h4>
                    <h3>500+</h3>
                    <motion.span
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants2}
                        animate={control}
                    >
                        &#127968;
                    </motion.span>
                </li>
                <li>
                    <h4>locations</h4>
                    <h3>20+</h3>
                    <motion.span
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants3}
                        animate={control}
                    >
                        &#127757;
                    </motion.span>
                </li>
                <li>
                    <h4>Workers</h4>
                    <h3>50+</h3>
                    <motion.span
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants4}
                        animate={control}
                    >
                        &#128119;
                    </motion.span>
                </li>
            </ul>
        </div>
    )
}

export default TrustedBy;