import { useRouter } from "next/router";
import { motion,AnimatePresence } from "framer-motion";
const variants = {
    fadeIn: {
      opacity: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    },
    inactive: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    },
    fadeOut: {
      opacity: 0,
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
                    animate="inactive"
                    initial="fadeIn"
                    exit="fadeOut"  
                >
                        {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
  };
  
  export default Transition;