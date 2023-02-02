import Image from "next/image";

function Services() {
    return (
        <>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fillOpacity="1" d="M0,96L48,117.3C96,139,192,181,288,192C384,203,480,181,576,149.3C672,117,768,75,864,96C960,117,1056,203,1152,218.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </>
    )
}

export default Services;