import ProtectedRoute from "@/components/PotectedRoute";
import { useAuth } from "context/AuthContext";
import { db } from "firebase.configs";
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {FaRegSadCry} from "react-icons/fa";

function Dashboard() {
  const { logOut } = useAuth();
  const router = useRouter();

  const hanldeLogOut = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (err) {
      console.log(err.message);
      toast.error("Some Error Occured ! Try Again", {
        hideProgressBar: true,
        autoClose: 1500,
      });
    }
  };

  return (
    <ProtectedRoute>
      <div id="dashboard_container">
        <h2>Welcome back admin </h2>
        <div id="btn_group">
          <button onClick={() => window.location.reload()}>Refresh</button>
          <button onClick={hanldeLogOut}>Sign Out </button>
        </div>
        <BookingDashboard />
      </div>
    </ProtectedRoute>
  );
}

function BookingDashboard() {
  const [bookingData, setBookingData] = useState([]);
  const [filteredBookingData,setFilteredBookingData] = useState([]);

  useEffect(() => {
    // fetch the bookings
    const getBookingData = async () => {
        try {
            let results = [];
            let querySnapShot = await getDocs(collection(db,"bookings"));
            querySnapShot.forEach((doc) => {
                results.push(
                    {
                        ...doc.data(),
                        id: doc.id
                    }
                );
            });
            setBookingData(results);
            setFilteredBookingData(results);
        } catch (err) {
            toast.error(err.message,{hideProgressBar: true,autoClose: 15000})
        }
    }
    getBookingData();
  },[]);

  useEffect(() => {
    setFilteredBookingData(bookingData);
  },[bookingData])

  // update booking status to "accepted"
  const updateStatus = async (status,id) => {
    // first find the booking data having the id
    let resultDataIndex = bookingData.findIndex(data => data.id === id);

    if (resultDataIndex <= -1) {
        return;
    }

    switch (status) {
        case "accepted":
            // set doc.status to accepted
            try {
                await setDoc(doc(db,"bookings",id),{
                    status: status
                },{merge: true});
                let tempData = bookingData[resultDataIndex];
                tempData.status = status;
                let tempBookingData = bookingData;
                tempBookingData.splice(resultDataIndex,1,tempData);
                setBookingData([...tempBookingData]);
                toast.success("Succesfully updated to status: Accepted",{hideProgressBar: true,autoClose: 1500});
                break;
            } catch (err) {
                toast.error(err.message,{hideProgressBar: true,autoClose: 15000})
            }
        case "rejected":
            // set doc.status to accepted
            try {
                await setDoc(doc(db,"bookings",id),{
                    status: status
                },{merge: true});
                let tempData = bookingData[resultDataIndex];
                tempData.status = status;
                let tempBookingData = bookingData;
                tempBookingData.splice(resultDataIndex,1,tempData);
                setBookingData([...tempBookingData]);
                toast.success("Succesfully updated to status: Rejected",{hideProgressBar: true,autoClose: 1500});
                break;
            } catch (err) {
                toast.error(err.message,{hideProgressBar: true,autoClose: 15000})
            }
        case "ongoing":
            // set doc.status to accepted
            try {
                await setDoc(doc(db,"bookings",id),{
                    status: status
                },{merge: true});
                let tempData = bookingData[resultDataIndex];
                tempData.status = status;
                let tempBookingData = bookingData;
                tempBookingData.splice(resultDataIndex,1,tempData);
                setBookingData([...tempBookingData]);
                toast.success("Succesfully updated to status: Ongoing",{hideProgressBar: true,autoClose: 1500});
                break;
            } catch (err) {
                toast.error(err.message,{hideProgressBar: true,autoClose: 15000})
            }
        case "completed":
            // set doc.status to accepted
            try {
                await setDoc(doc(db,"bookings",id),{
                    status: status
                },{merge: true});
                let tempData = bookingData[resultDataIndex];
                tempData.status = status;
                let tempBookingData = bookingData;
                tempBookingData.splice(resultDataIndex,1,tempData);
                setBookingData([...tempBookingData]);
                toast.success("Succesfully updated to status: Completed",{hideProgressBar: true,autoClose: 1500});
                break;
            } catch (err) {
                toast.error(err.message,{hideProgressBar: true,autoClose: 15000})
            }
        default:
            toast.error("Cannot update status right now.",{hideProgressBar: true,autoClose: 15000})
    }
  }

  // delete booking orders
  const deleteBooking = async (id) => {
    try {
        // here delete the doc booking order by id
        await deleteDoc(doc(db,"bookings",id));
        let newBookingData = bookingData.filter(data => data.id !== id);
        setBookingData(newBookingData);
        toast.success("Succefully Deleted the Booking Order",{hideProgressBar: true,autoClose: 1500});
    } catch (err) {
        toast.error(err.message,{hideProgressBar: true,autoClose: 15000})
    }
  }

  return (
    <div id="booking_dashboard">
      <h3>Orders Dashboard </h3>
      <ul>
        <h5>Customers </h5>
        <div id="dashboard_btns">
          <button
            id="accepted"
            onClick={() =>
              setFilteredBookingData(
                bookingData.filter((data) => data.status === "accepted")
              )
            }
          >
            Accepted
          </button>
          <button
            id="rejected"
            onClick={() =>
              setFilteredBookingData(
                bookingData.filter((data) => data.status === "rejected")
              )
            }
          >
            Rejected
          </button>
          <button
            id="ongoing"
            onClick={() =>
              setFilteredBookingData(
                bookingData.filter((data) => data.status === "ongoing")
              )
            }
          >
            OnGoing
          </button>
          <button
            id="completed"
            onClick={() =>
              setFilteredBookingData(
                bookingData.filter((data) => data.status === "completed")
              )
            }
          >
            Completed
          </button>
        </div>
      </ul>

      <div id="order_container">
        {
            filteredBookingData.length <= 0 ? <h4 id="empty">
                <span>
                    <FaRegSadCry />
                </span>
                <br></br>
                You Have no Bookings so far
            </h4> :

            filteredBookingData.map((data,index) => {
                return <SingleOrder
                            key={index}
                            id={data.id}
                            name={data.name}
                            address={data.address}
                            email={data.email}
                            phone={data.phone}
                            package_type={data.package_type}
                            status={data.status}
                            ordered_on={data.ordered_on}
                            complete_on={data.complete_on}
                            onUpdateStatus={updateStatus}
                            onDeleteBooking={deleteBooking}
                        />
            })
        }
      </div>
    </div>
  );
}

function SingleOrder({name,id,address,email,phone,package_type,status,ordered_on,complete_on,onUpdateStatus,onDeleteBooking}) {

    const updateToStatus = (e) => {
        let newStatus = e.target.value;
        onUpdateStatus(newStatus,id);
    }

    const deleteSingleBooking = () => {
        onDeleteBooking(id);
    }

    return (
        <div className={"single_order" + " " + status}>
            <p>
                <strong>Name : </strong>
                <span>{name}</span>
            </p>
            <p>
                <strong>Address : </strong>
                <span>{address}</span>
            </p>
            <p>
                <strong>Email : </strong>
                <span>{email}</span>
            </p>
            <p>
                <strong>Phone No. : </strong>
                <span>{phone}</span>
            </p>
            <p>
                <strong>Package : </strong>
                <span>{package_type}</span>
            </p>
            <p>
                <strong>Status : </strong>
                <span>{status}</span>
            </p>
            <p>
                <strong>Date : </strong>
                <span>{ordered_on} - {complete_on}</span>
            </p>
            <div id="actions_list">
                <button id="accept" value="accepted" onClick={updateToStatus}>
                    Accept
                </button>
                <button id="reject" value="rejected" onClick={updateToStatus}>
                    Reject
                </button>
                <button id="ongoing" value="ongoing" onClick={updateToStatus}>
                    Ongoing
                </button>
                <button id="completed" value="completed" onClick={updateToStatus}>
                    Completed
                </button>
            </div>
            <button id="delete_order" onClick={deleteSingleBooking}>
                Delete Order
            </button>
        </div>
    )
}



export default Dashboard;
