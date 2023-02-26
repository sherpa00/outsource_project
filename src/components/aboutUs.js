import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAnimation,motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutUs() {
    let router = useRouter();

    const control = useAnimation();
    const [ref,inView] = useInView();

    const animationVariants0 = {
        hidden: {opacity: 0},
        visible: {opacity: 1,transition: {duration: 0.8,delay: 0}}
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
        router.push("/about-us");
    }

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fillOpacity="1" d="M0,64L48,96C96,128,192,192,288,186.7C384,181,480,107,576,80C672,53,768,75,864,112C960,149,1056,203,1152,197.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div id="aboutus-container">
                <motion.div 
                    id="aboutus-details"
                    ref={ref}
                    initial="hidden"
                    animate={control}
                    variants={animationVariants0}
                >
                    <h2>About Us<span>&#128161;</span></h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus luctus ante ut aliquam. Mauris consectetur sem diam, ut convallis turpis laoreet a. Suspendisse tempus tortor nibh, interdum fermentum tortor sodales ac. Praesent quis ante aliquet, consequat enim non, bibendum tortor. Praesent ultricies, augue vitae porttitor molestie, leo urna laoreet risus, a fringilla elit leo eu orci. Sed scelerisque lectus elit, non auctor nunc tincidunt eu. Curabitur eu turpis est. 
                    </p>
                    <button onClick={handleClick}>
                        Learn more
                    </button>
                </motion.div>
                <Image
                    src="/supplies.png"
                    alt="cleaning supplies"
                    width={400}
                    height={400}
                />
            </div>
        </>
    )
}

export default AboutUs;