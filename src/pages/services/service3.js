import Head from "next/head";
import ContactUs from "@/components/contact";
import ServiceStyle from "@/styles/Services.module.css";
import Image from "next/image";
import {MdCleaningServices,MdDryCleaning,MdCleanHands,MdOutlineHomeWork} from "react-icons/md";
import {GiVacuumCleaner,GiBroom} from "react-icons/gi"
import HowToBook from "@/components/howtobook";

function Service3Page() {
    return (
        <>
        <Head>
            <title>Service3</title>
            <meta name="description" content="more info about the service3 cleaing services in our company in australia" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content="service3 , service3 in australia, service3 cleaning services company in australia, service3 cleaing company in australia, service3 cleaning services in au" />
        </Head>
        <div className={ServiceStyle.container}>
            <Image 
                src="/services_header.jpg"
                alt="a group of cleaners cleaning offics spaces collectively"
                width={400}
                height={400}
                className={ServiceStyle.header_image}
                title="Photo by Adi Wahid from Unsplash"
            />
            <h2 className={ServiceStyle.header_text}>
                Service 3
            </h2>
            <p className={ServiceStyle.header_text_paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci ante, congue et nisl quis,ndimentum arcu id diam dignissim, sed gravida lectus fringilla. Aliquam blandit vitae ante eget faucibus. Duis egestas, odio sed tempor aliquam, orci sapien sagittis erat, sed accumsan purus libero vitae velit. Aliquam pellentesque magna sed enim mattis lacinia. Phasellus id augue cursus, tempus magna sit amet, blandit felis. Pellentesque id consectetur justo, eu mattis ante. Cras eget elit in nibh scelerisque finibus at a mauris. Praesent ultricies, justo non sodales gravida, mauris mauris venenatis tortor, non tempus tellus purus vel diam. Maecenas sed suscipit arcu, vel pellentesque mi. Aenean vitae lorem ac erat vulputate laoreet a et justo. Cras vulputate nulla at arcu iaculis, quis tincidunt libero pulvinar. Suspendisse interdum molestie velit, eu finibus purus laoreet sed.
            </p>
            <h3 className={ServiceStyle.included_header}>
                What is included here?
            </h3>
            <p className={ServiceStyle.included_header_text}>
                Lorem ipsum dogue cursus, t
                empus magna sit amet, blandit felis. Pellenteus at a mauris. Praesent ultricies, jkjfs usto non sodales gravida, mauris mauris venenatis tortor, non tempus tellus purus vel diam. Maecenas sed suscipit arcu, vel pellentesque mi.
            </p>
            <ul className={ServiceStyle.included_list}>
                
                <li className={ServiceStyle.included_list_li}>
                    <MdCleaningServices className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        something 1
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci ante, congue et nisl quis, vulputate aliquam turpis. Mauris condimentum arcu id diam dignissim, sed gravida lectus fringilla.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <GiVacuumCleaner className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        something 2
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci ante, congue et nisl quis, vulputate aliquam turpis. Mauris condimentum arcu id diam dignissim, sed gravida lectus fringilla.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdDryCleaning className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        something 3
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci ante, congue et nisl quis, vulputate aliquam turpis. Mauris condimentum arcu id diam dignissim, sed gravida lectus fringilla.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdCleanHands className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        something 4
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci ante, congue et nisl quis, vulputate aliquam turpis. Mauris condimentum arcu id diam dignissim, sed gravida lectus fringilla.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <MdOutlineHomeWork className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        something 5
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci ante, congue et nisl quis, vulputate aliquam turpis. Mauris condimentum arcu id diam dignissim, sed gravida lectus fringilla.
                    </small>
                </li>

                <li className={ServiceStyle.included_list_li}>
                    <GiBroom className={ServiceStyle.included_list_icon} />
                    <h4 className={ServiceStyle.included_list_header}>
                        something 6
                    </h4>
                    <small className={ServiceStyle.included_list_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci ante, congue et nisl quis, vulputate aliquam turpis. Mauris condimentum arcu id diam dignissim, sed gravida lectus fringilla.
                    </small>
                </li>
            </ul>
            <HowToBook />
            <ContactUs />
        </div>
        </>
    )
}

export default Service3Page;