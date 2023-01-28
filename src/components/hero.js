import Image from "next/image";

function Hero() {
    return (
        <div className="hero-container">
            <div id="hero-details">
                <h2>The Best Cleaning Service In the Town.</h2>
                <p>
                    only the best handyman to get the job done and make your home a beautifull place to live peacefully.
                </p>
                <button>
                    Book Service Now
                </button>
            </div>
            <div id="hero-image">
                <Image
                    src="/hero.webp"
                    height={500}
                    width={500}
                    alt="Hero Backgroudn"
                    priority={true}
                />
            </div>
        </div>
    )
}

export default Hero;