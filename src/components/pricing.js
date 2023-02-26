import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAnimation,motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Pricing() {
    let router = useRouter();

    const control = useAnimation();
    const [ref,inView] = useInView();

    const animationVariants0 = {
        hidden: {opacity: 0},
        visible: {opacity: 1,transition: {duration: 1}}
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
        router.push("/booking");
    }

    return (
        <>
            <div id="pricing-container">
                <h2>
                    Get The best Pricing <span>&#x1F4B0;</span>
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus luctus ante ut aliquam. Mauris consectetur sem diam, ut convallis turpis laoreet a. Suspendisse tempus tortor nibh, interdum fermentum tortor sodales ac.
                </p>
                <div id="pricing-list">
                    <motion.div 
                        className="pricing basic"
                        ref={ref}
                        initial="hidden"
                        animate={control}
                        variants={animationVariants0}
                    >
                        <div className="pricing-details">
                            <h3>Basic</h3>
                            <h4>$ 8.88</h4>
                            <h5>per hour</h5>
                        </div>
                        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 79.85091034008931,231.2064582617657 159.70182068017863,262.4129165235314 221,255 C 282.2981793198214,247.58708347646856 325.04362761937483,201.55479216764002 392,192 C 458.95637238062517,182.44520783235998 550.1236688423222,209.36791480590864 633,221 C 715.8763311576778,232.63208519409136 790.4616970113361,228.9735486087255 858,209 C 925.5383029886639,189.0264513912745 986.0295431123327,152.7378907591893 1056,155 C 1125.9704568876673,157.2621092408107 1205.4201305393337,198.07488835451736 1271,212 C 1336.5798694606663,225.92511164548264 1388.2899347303332,212.9625558227413 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#0693e3" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
                        <ul>
                            <li><span className="right">&#10004;</span> sample text here</li>
                            <li><span className="right">&#10004;</span> other text here</li>
                            <li><span className="right">&#10004;</span> sample text here</li>
                            <li><span className="right">&#10004;</span> other text here</li>
                            <li><span className="wrong">&#10006;</span> sample text here</li>
                            <li><span className="wrong">&#10006;</span> other text here</li>
                            <li><span className="wrong">&#10006;</span> sample text here</li>
                            <li><span className="wrong">&#10006;</span> other text here</li>
                        </ul>
                        <button onClick={handleClick}>
                            Book Now
                        </button>
                    </motion.div>

                    <motion.div 
                        className="pricing standard"
                        ref={ref}
                        initial="hidden"
                        animate={control}
                        variants={animationVariants0}
                    >
                        <div className="pricing-details">
                            <h3>Standard</h3>
                            <h4>$ 15.5</h4>
                            <h5>per hour</h5>
                        </div>
                        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 73.69220199244245,171.28203366540708 147.3844039848849,142.56406733081414 204,169 C 260.6155960151151,195.43593266918586 300.15458605290286,277.0257643421505 373,272 C 445.84541394709714,266.9742356578495 551.9972518035038,175.332875300584 638,157 C 724.0027481964962,138.667124699416 789.8564067330815,193.64273445551356 848,220 C 906.1435932669185,246.35726554448644 956.5771212641703,244.09618687736173 1011,221 C 1065.4228787358297,197.90381312263827 1123.8351082102372,153.9725180350395 1196,147 C 1268.1648917897628,140.0274819649605 1354.0824458948814,170.01374098248024 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#00d084" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
                        <ul>
                            <li><span className="right">&#10004;</span> sample text here</li>
                            <li><span className="right">&#10004;</span> other text here</li>
                            <li><span className="right">&#10004;</span> sample text here</li>
                            <li><span className="right">&#10004;</span> other text here</li>
                            <li><span className="right">&#10004;</span> sample text here</li>
                            <li><span className="right">&#10004;</span> other text here</li>
                            <li><span className="wrong">&#10006;</span> sample text here</li>
                            <li><span className="wrong">&#10006;</span> other text here</li>
                        </ul>
                        <button onClick={handleClick}>
                            Book Now
                        </button>
                    </motion.div>

                    <motion.div 
                        className="pricing premium"
                        ref={ref}
                        initial="hidden"
                        animate={control}
                        variants={animationVariants0}
                    >
                        <div className="pricing-details">
                            <h3>Premium</h3>
                            <h4>$ 24.99</h4>
                            <h5>per hour</h5>
                        </div>
                        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 83.43455857093781,209.62487117828925 166.86911714187562,219.2497423565785 231,206 C 295.1308828581244,192.7502576434215 339.9580900034352,156.62590175197525 393,176 C 446.0419099965648,195.37409824802475 507.29852284438346,270.24665063552044 579,266 C 650.7014771556165,261.75334936447956 732.8478186190312,178.387495705943 799,146 C 865.1521813809688,113.612504294057 915.3102026794916,132.20336654070766 992,156 C 1068.6897973205084,179.79663345929234 1171.9113706630023,208.79903813122638 1251,217 C 1330.0886293369977,225.20096186877362 1385.0443146684988,212.6004809343868 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#9900ef" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
                        <ul>
                            <li><span className="right">&#10004;</span> sample text here</li>
                            <li><span className="right">&#10004;</span> other text here</li>
                            <li><span className="right">&#10004;</span> sample text here</li>
                            <li><span className="right">&#10004;</span> other text here</li>
                            <li><span className="right">&#10004;</span> sample text here</li>
                            <li><span className="right">&#10004;</span> other text here</li>
                            <li><span className="right">&#10004;</span> sample text here</li>
                            <li><span className="right">&#10004;</span> other text here</li>
                        </ul>
                        <button onClick={handleClick}>
                            Book Now
                        </button>
                    </motion.div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fillOpacity="1" d="M0,64L30,58.7C60,53,120,43,180,74.7C240,107,300,181,360,213.3C420,245,480,235,540,202.7C600,171,660,117,720,122.7C780,128,840,192,900,208C960,224,1020,192,1080,154.7C1140,117,1200,75,1260,85.3C1320,96,1380,160,1410,192L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
        </>
    )
}

export default Pricing;