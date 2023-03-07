import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAnimation,motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Services() {
    let router = useRouter();
    const control = useAnimation();
    const [ref,inView] = useInView();

    const animationVariants0 = {
        hidden: {opacity: 0,scale: 0.7},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0}}
    }
    const animationVariants1 = {
        hidden: {opacity: 0,scale: 0.7},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.1}}
    }
    const animationVariants2 = {
        hidden: {opacity: 0,scale: 0.7},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.2}}
    }
    const animationVariants3 = {
        hidden: {opacity: 0,scale: 0.7},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.3}}
    }
    const animationVariants4 = {
        hidden: {opacity: 0,scale: 0.7},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.4}}
    }
    const animationVariants5 = {
        hidden: {opacity: 0,scale: 0.7},
        visible: {opacity: 1,scale: 1,transition: {duration: 0.5,delay: 0.5}}
    }

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    },[control,inView]);

    const handleClick = (e) => {
        e.preventDefault();
        router.push("/services");
    }
    return (
        <>
            <div id="services-container">
                <Image
                    src="/bw.webp"
                    width={500}
                    height={500}
                    alt="Picture about the people cleaning room"
                    quality={100}
                />
                <h2>Our Services</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus luctus ante ut aliquam. Mauris consectetur sem diam, ut convallis turpis laoreet a. Suspendisse tempus tortor nibh, interdum fermentum tortor sodales ac. Praesent quis ante aliquet, consequat enim non, bibendum tortor.
                </p>
                <button onClick={handleClick}>
                    Learn more
                </button>
                <div id="service-list">
                    <motion.div 
                        className="service"
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants0}
                        animate={control}
                    >
                        <span>&#127969;</span>
                        <h3>Home Cleaning</h3>
                    </motion.div>
                    <motion.div 
                        className="service"
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants1}
                        animate={control}
                    >
                        <span>&#127970;</span>
                        <h3>Office Cleaning</h3>
                    </motion.div>
                    <motion.div 
                        className="service"
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants2}
                        animate={control}
                    >
                        <span>&#127973;</span>
                        <h3>Hospital Cleaning</h3>
                    </motion.div>
                    <motion.div
                        className="service"
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants3}
                        animate={control}
                    >
                        <span>&#127981;</span>
                        <h3>Commercial Cleaning</h3>
                    </motion.div>
                    <motion.div
                        className="service"
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants4}
                        animate={control}
                    >
                        <span>&#127983;</span>
                        <h3>Churches Cleaning</h3>
                    </motion.div>
                    <motion.div
                        className="service"
                        ref={ref}
                        initial="hidden"
                        variants={animationVariants5}
                        animate={control}
                    >
                        <span>&#127979;</span>
                        <h3>School Cleaning</h3>
                    </motion.div>
                    
                </div>
            </div>
        </>
    )
}

export default Services;