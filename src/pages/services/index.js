import Image from "next/image";
import { useRouter } from "next/router";

const servicesData = [
    {
        title: "Service1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst",
        position: "left",
        linkSrc: "/services/service1",
        imgSrc : "/services1.webp",
        alt: "animated people working in cleaning services",
        id: "1"
    },
    {
        title: "Service2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst",
        position: "right",
        linkSrc: "/services/service2",
        imgSrc : "/services2.webp",
        alt: "animated people working in cleaning services",
        id: 2
    },
    {
        title: "Service3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst",
        position: "left",
        linkSrc: "/services/service3",
        imgSrc : "/services1.webp",
        alt: "animated people working in cleaning services",
        id: 3
    },
    {
        title: "Service4",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst",
        position: "right",
        linkSrc: "/services/service4",
        imgSrc : "/services2.webp",
        alt: "animated people working in cleaning services",
        id: 4
    }
]

function Services() {
    return (
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
    )
}

function ServiceDetails({title,desc,position,linkSrc,imgSrc,alt}) {

    let className = `service-details ${position}`;

    let router = useRouter();

    const hanldeClick = (e) => {
        e.preventDefault();
        router.push(linkSrc);
    }

    return (
        <div className={className}>
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
        </div>
    )
}

export default Services;