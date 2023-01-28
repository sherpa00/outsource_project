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

    return (
        <>
        <nav>
            <h2>logo</h2>
            <ul id="desktop_nav">
                <li>
                    Home
                </li>
                <li>
                    Services
                </li>
                <li>
                    About Us
                </li>
                <li>
                    Contact Us
                </li>
                <button>
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
                        Home
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <button>
                        Booking
                    </button>
                </ul>
            </div>
        </>
    )
}

export default Navbar;