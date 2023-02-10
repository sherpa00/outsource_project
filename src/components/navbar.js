import Link from "next/link";
import { useRouter } from "next/router";
import { createRef } from "react";
import {RxHamburgerMenu,RxCross1} from "react-icons/rx";

function Navbar() {

    const navRef = createRef();

    const handleShowNav = () => {
        navRef.current.style.left = "0";
    }

    const handleHideNav = () => {
        navRef.current.style.left = "-1000%";
    }

    let router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push("/booking");
        handleHideNav();
    }

    return (
        <>
        <nav>
            <h2 style={{cursor: "pointer"}} onClick={() => window.location.href = "/"}>
                LOGO
            </h2>
            <ul id="desktop_nav">
                    <li>
                        <Link href="/" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/about-us">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact-us">
                            Contact us
                        </Link>
                    </li>
                    <button onClick={handleClick}>
                        Booking
                    </button>
            </ul>
            <h2 id="icon_bar" onClick={handleShowNav}>
                <RxHamburgerMenu />
            </h2>    
        </nav>
        <div id="mobile" ref={navRef}>
            <h2 id="icon_bar" onClick={handleHideNav}>
                <RxCross1 />
            </h2>
            <ul id="mobile_nav">
                    <li>
                        <Link href="/" onClick={handleHideNav}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" onClick={handleHideNav}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/about-us" onClick={handleHideNav}>
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact-us" onClick={handleHideNav}>
                            Contact us
                        </Link>
                    </li>
                    <button onClick={handleClick}>
                        Booking
                    </button>
                </ul>
            </div>
        </>
    )
}

export default Navbar;