import Image from "next/image";

function AboutUs() {
    return (
        <div id="aboutus-container">
            <div id="aboutus-details">
                <h2>About Us<span>&#128161;</span></h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus luctus ante ut aliquam. Mauris consectetur sem diam, ut convallis turpis laoreet a. Suspendisse tempus tortor nibh, interdum fermentum tortor sodales ac. Praesent quis ante aliquet, consequat enim non, bibendum tortor. Praesent ultricies, augue vitae porttitor molestie, leo urna laoreet risus, a fringilla elit leo eu orci. Sed scelerisque lectus elit, non auctor nunc tincidunt eu. Curabitur eu turpis est. 
                </p>
                <button>
                    Read More
                </button>
            </div>
            <Image
                src="/supplies.png"
                alt="cleaning supplies"
                width={400}
                height={400}
            />
        </div>
    )
}

export default AboutUs;