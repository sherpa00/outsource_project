import Head from "next/head";
import ContactUs from "@/components/contact";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAnimation,motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const servicesData = [
    {
        title: "House Cleaning",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst",
        position: "left",
        linkSrc: "/services/house-cleaning",
        imgSrc : "/house_cleaning1.jpg",
        alt: "a women cleanig window of a house with sprays and gloves",
        id: "1"
    },
    {
        title: "Office Cleaning",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst",
        position: "right",
        linkSrc: "/services/office-cleaning",
        imgSrc : "/office_cleaning.jpg",
        alt: "a man cleaning office spaces alone",
        id: 2
    },
    {
        title: "Hospital Cleaning",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst",
        position: "left",
        linkSrc: "/services/hospital-cleaning",
        imgSrc : "/hospital_cleaning.jpg",
        alt: "a person cleaning a hospital equipments",
        id: 3
    },
    {
        title: "Commercial Cleaning",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst",
        position: "right",
        linkSrc: "/services/commercial-cleaning",
        imgSrc : "/commercial_cleaning.jpg",
        alt: "a person mopping and cleanig floor",
        id: 4
    }
]

function Services() {


    return (
        <>
        <Head>
            <title>Our Services</title>
            <meta name="description" content="Getting to know more about us as a cleaning services located in Australia providing Major Cleaning services like Home cleaning, Office cleaning, School cleaning and many more." />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="our services, cleaning services available, cleaning services company in australia, cleaning services in au" />
        </Head>
            <div id="services">
                <h2>Our <span>Services</span></h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst. Pellentesque faucibus pulvinar justo. Sed orci massa, malesuada ac felis ut, finibus sodales erat. Ut nec leo faucibus, faucibus leo vel, porttitor orci.
                </p>
                <div id="services-details-list">
                    {
                        servicesData.map((service,index) => {
                            return <ServiceDetails
                                        key={service.id}
                                        title={service.title}
                                        desc={service.desc}
                                        position={service.position}
                                        linkSrc={service.linkSrc}
                                        imgSrc={service.imgSrc}
                                        alt={service.alt}
                                    />
                        } )
                    }
                </div>
            </div>
            <ContactUs />
        </>
    )
}

function ServiceDetails({title,desc,position,linkSrc,imgSrc,alt}) {

    let className = `service-details ${position}`;

    let router = useRouter();

    const hanldeClick = (e) => {
        e.preventDefault();
        router.push(linkSrc);
    }

    const control = useAnimation();
    const [ref,inView] = useInView();

    const animationVariants0 = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 0.8}}
    }

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    },[control,inView]);

    return (
        <motion.div 
            className={className}
            ref={ref}
            animate={control}
            variants={animationVariants0}
            initial="hidden"
        >
                    <Image 
                        src={imgSrc}
                        width={400}
                        height={400}
                        alt={alt}
                    />
                    <div>
                        <h3>
                            {title}
                        </h3>
                        <p>
                            {desc}
                        </p>
                        <button onClick={hanldeClick}>
                            Read More
                        </button>
                    </div>
        </motion.div>
    )
}

export default Services;