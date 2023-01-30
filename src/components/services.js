import Image from "next/image";

function Services() {
    return (
        <div id="services-container">
            <Image
                src="/bw.webp"
                width={500}
                height={500}
                alt="Picture about the people cleaning room"
                quality={100}
            />
            <h2>Our Services</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus luctus ante ut aliquam. Mauris consectetur sem diam, ut convallis turpis laoreet a. Suspendisse tempus tortor nibh, interdum fermentum tortor sodales ac. Praesent quis ante aliquet, consequat enim non, bibendum tortor.
            </p>
            <button>
                Book a Service
            </button>
            <div id="service-list">
                <div className="service">
                    <span>&#127969;</span>
                    <h3>Home Cleaning</h3>
                </div>
                <div className="service">
                    <span>&#127970;</span>
                    <h3>Office Cleaning</h3>
                </div>
                <div className="service">
                    <span>&#127973;</span>
                    <h3>Hospital Cleaning</h3>
                </div>
                <div className="service">
                    <span>&#127981;</span>
                    <h3>Constuction Cleaning</h3>
                </div>
                <div className="service">
                    <span>&#127983;</span>
                    <h3>Churches Cleaning</h3>
                </div>
                <div className="service">
                    <span>&#127979;</span>
                    <h3>School Cleaning</h3>
                </div>
                
            </div>
        </div>
    )
}

export default Services;