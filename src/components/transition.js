import { useRouter } from "next/router";
import { motion,AnimatePresence } from "framer-motion";
const variants = {
    fadeIn: {
      y: 0,
      opacity: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    },
    inactive: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    },
    fadeOut: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    }
  };

const Transition = ({ children }) => {
    const {asPath} = useRouter();

    return (
        <div className="effect">
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={asPath}
                    variants={variants}
                    initial="fadeIn"
                    animate="inactive"
                    exit="fadeOut"
                >
                        {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
  };
  
  export default Transition;