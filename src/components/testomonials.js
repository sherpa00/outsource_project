import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa"
import {BsPersonCircle,BsArrowLeftCircle,BsArrowRightCircle} from "react-icons/bs";
import { useEffect, useState } from "react";
import { useAnimation,motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const reviewData = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non turpis sapien. Curabitur in metus non lorem ultricies convallis quis ut orci. Maecenas scelerisque felis in ex placerat, vitae dapibus arcu tincidunt. In molestie massa in ex condimentum, sit amet consectetur ipsum eleifend. Donec eros felis, vulputate eu magna id, accumsan egestas ex. Curabitur volutpat nec nisl et vestibulum. Aliquam convallis, diam vitae mattis iaculis, nunc dui auctor neque, bibendum fringilla nisi neque lacinia elit nay esto asfkjfd fd saftay echo lamina.",
        name: "Mr. Smith roy",
        company: "Nicecompany.co",
        id: 1
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non turpis sapien. Curabitur in metus non lorem ultricies convallis quis ut orci. Maecenas scelerisque felis in ex placerat, vitae dapibus arcu tincidunt. In molestie massa in ex condimentum, sit amet consectetur ipsum eleifend. Donec eros felis, vulputate eu magna id, accumsan egestas ex. Curabitur volutpat nec nisl et vestibulum. Aliquam convallis, diam vitae mattis iaculis, nunc dui auctor neque, bibendum fringilla nisi neque lacinia elit. Proin facilisis in arcu vel vehicula.",
        name: "Mr. Wilson liak",
        company: "company-shy.co",
        id: 2
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non turpis sapien. Curabitur in metus non lorem ultricies convallis quis ut orci. Maecenas scelerisque felis in ex placerat, vitae dapibus arcu tincidunt. In molestie massa in ex condimentum, sit amet consectetur ipsum eleifend. Donec eros felis, vulputate eu magna id, accumsan egestas ex. Curabitur volutpat nec nisl et vestibulum. Aliquam convallis, diam vitae mattis iaculis, nunc dui auctor neque, bibendum fringilla nisi neque lacinia elit. Proin facilisis in arcu",
        name: "Mrs. Rihna lin",
        company: "company.co",
        id: 3
    }
]

function Testomonials() {
    const [index,setIndex] = useState(0);

    const control = useAnimation();
    const [ref,inView] = useInView();

    const animationVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1,transition: {duration: 1,delay: 0.2}}
    }

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    },[control,inView]);

    const handleGetPrev = () => {
        if (index <= 0) {
            setIndex(reviewData.length-1);
        } else {
            setIndex(prevState => prevState - 1);
        }
    }

    const handleGetNext = () => {
        if (index >= reviewData.length-1) {
            setIndex(0);
        } else {
            setIndex(prevState => prevState + 1);
        }
    }

    return (
        <div id="testomonials_container" >
            <h2>Our Testomonials</h2>
            <motion.div 
                id="testomonials_list"
                ref={ref}
                variants={animationVariants}
                animate={control}
                initial="hidden"
            >
                <SingleReview 
                    text={reviewData[index].text}
                    name={reviewData[index].name}
                    company={reviewData[index].company}
                    onGetPrev={handleGetPrev}
                    onGetNext={handleGetNext}
                />
            </motion.div>
        </div>
    )
}

function SingleReview({text,name,company,onGetPrev,onGetNext}) {

    const handlePrev = () => {
        onGetPrev();
        
    }

    const handleNext = () => {
        onGetNext();
    }

    if (!text) {
        return null;
    }

    return (
        <div className="single-review-container">
            <BsArrowLeftCircle id="left" onClick={handlePrev}/>
            <div className="single-review">
                <FaQuoteLeft id="quote-left"/>
                <p>
                    {text}
                </p>
                <FaQuoteRight id="quote-right" />
                <BsPersonCircle id="person" />
                <h4>
                {name + "," + company}
                </h4>
            </div>
            <BsArrowRightCircle id="right" onClick={handleNext}/>
        </div>
    )
}

export default Testomonials;