import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { addDoc, collection } from "firebase/firestore";
import { db } from "firebase.configs";

function Booking() {
    return (
        <div id="booking-container">
            <h2>
                Book Now for instant <span>Quote</span>
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur kadn kjdka fkda kjdfa fkjdask ante lorem imperdiet est, at venenatis orci lacus id mi. 
            </p>  
            <h3>
                Fill Below Form
            </h3>
            <BookingForm />
        </div>
    )
}

function BookingForm() {
    const [fullname,setFullname] = useState("");
    const [address,setAddress] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [date,setDate] = useState("");
    const [info,setInfo] = useState("");

    const [loading,setLoading] = useState(false);

    const packageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setLoading(true);

        let bookingData = {
            from_name: fullname,
            from_address: address,
            from_email: email,
            from_phone: phone,
            from_date: date,
            from_additional_info: info,
            from_service_package: packageRef.current.value,
            from_booking_date: new Date().toLocaleDateString()
        }

        // send email here for booking
        emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.BOOKING_TEMPLATE_ID,
            bookingData,
            process.env.EMAILJS_PUBLIC_KEY
        ).then( async (response) => {
            try {
                // add the booking 
                const docRef = await addDoc(collection(db,"bookings"), {
                    name: fullname,
                    email: email,
                    phone: phone,
                    address: address,
                    package_type: packageRef.current.value,
                    status: "ongoing",
                    ordered_on: date,
                    complete_on: new Date().toLocaleDateString(),
                    additional_info: info
                });

                toast.success('Successfully Booked. Thank You.', { hideProgressBar: true, autoClose: 1500});

            } catch (error) {
                console.log(error.message);
            }
        }).catch((err) => {
            toast.error('Some Error occurd. Try Again', { hideProgressBar: true, autoClose: 1500});
        });
        setFullname("");
        setEmail("")
        setAddress("");
        setDate("");
        setInfo("");
        setPhone("");
        packageRef.current.value = "";

        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <span>
                <span>
                    <label htmlFor="fullname">
                        Your Name:
                    </label>
                    <input type="text" id="fullname" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="jhon doe" required />
                </span>

                <span>
                    <label htmlFor="address">
                        Your Address :
                    </label>
                    <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="st-1001,Melbourne" required />
                </span>
            </span>

            <label htmlFor="date">
                Your Prefered Date :
            </label>
            <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />

            <span>
                <span>
                    <label htmlFor="email">
                        Your Email :
                    </label>
                    <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jhondoe@gmail.com" required />
                </span>

                <span>
                    <label htmlFor="phone">
                        Your Phone Number :
                    </label>
                    <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="2901-201-203-03" required />
                </span>
            </span>

            <label htmlFor="level">
                Prefered Service Package:
            </label>
            <select name="level" id="level" ref={packageRef}>
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
            </select>

            <label htmlFor="info">
                Some Additional Info: 
            </label>
            <textarea type="text" id="info" name="info" value={info} onChange={(e) => setInfo(e.target.value)} placeholder="here goes some of your additional info to us.." required />

            <button type="submit">
                {
                    loading ? "loading..." : "Send Booking"
                }
            </button>
        </form>
    )
}

export default Booking;