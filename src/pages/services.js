import Image from "next/image";

function Services() {
    return (
        <div id="services">
            <h2>Our <span>Services</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst. Pellentesque faucibus pulvinar justo. Sed orci massa, malesuada ac felis ut, finibus sodales erat. Ut nec leo faucibus, faucibus leo vel, porttitor orci.
            </p>
            <div id="services-details-list">
                <ServiceDetails
                    src="/services1.webp"
                    title="Service No. 1"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst"
                    position="left"
                />
                <ServiceDetails
                    src="/services2.webp"
                    title="Service No. 2"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst"
                    position="right"
                />
                <ServiceDetails
                    src="/services1.webp"
                    title="Service No. 3"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst"
                    position="left"
                />
                <ServiceDetails
                    src="/services2.webp"
                    title="Service No. 4"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra a metus ut placerat. Phasellus hendrerit vitae urna vitae pharetra. Curabitur sit amet pharetra eros, et vestibulum erat. Vestibulum non pharetra orci, eget gravida tellus. Nam sed ligula odio. In hac habitasse platea dictumst"
                    position="right"
                />
            </div>
        </div>
    )
}

function ServiceDetails({src,title,desc,position}) {

    let className = `service-details ${position}`;

    return (
        <div className={className}>
                    <Image 
                        src={src}
                        width={400}
                        height={400}
                        alt="Services pictures"
                    />
                    <div>
                        <h3>
                            {title}
                        </h3>
                        <p>
                            {desc}
                        </p>
                    </div>
        </div>
    )
}

export default Services;