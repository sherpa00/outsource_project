import Image from "next/image";
import { useRouter } from "next/router";
import { TypeAnimation } from "react-type-animation";
import { useAnimation,motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Hero() {
    let cities = [
        "Sydney",
        1500,
        "Melbourne",
        1500,
        "Brisbane",
        1500,
        "Perth",
        1500,
        "Adelaide",
        1500
    ];

    let router = useRouter();
    const control = useAnimation();
    const [ref,inView] = useInView();

    const animationVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.8} },
        hidden: { opacity: 0,y: 100 }
      };
      
    const handleClick = (e) => {
        e.preventDefault();
        router.push("/booking");
    }

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    },[control,inView])

    return (
        <>
            <motion.div 
                className="hero-container"
                ref={ref}
                initial="hidden"
                variants={animationVariants}
                animate={control}
            >
                <div id="hero-details">
                    <h2>The Best Cleaning Service located in <span> <TypeAnimation
                            sequence={cities}
                            speed={10}
                            wrapper="span"
                            repeat={Infinity}
                        >

                        </TypeAnimation>
                        </span>
                    </h2>
                    <p>
                        only the best handyman to get the job done and make your home a beautifull place to live peacefully.
                    </p>
                    <button onClick={handleClick}>
                        Book Now
                    </button>
                </div>
                <Image
                        src="/hero.webp"
                        width={400}
                        height={400}
                        alt="Hero Background"
                        priority={true}
                />
            </motion.div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fillOpacity="1" d="M0,64L40,106.7C80,149,160,235,240,240C320,245,400,171,480,133.3C560,96,640,96,720,122.7C800,149,880,203,960,224C1040,245,1120,235,1200,197.3C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </>
    )
}

export default Hero;