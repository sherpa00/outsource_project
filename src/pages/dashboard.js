import ProtectedRoute from "@/components/PotectedRoute";
import MyCharts from "@/components/charts";
import { useAuth } from "context/AuthContext";
import { db } from "firebase.configs";
import { collection,deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
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
        <MyCharts />
        <BookingDashboard />
      </div>
    </ProtectedRoute>
  );
}

function BookingDashboard() {
  const [bookingData, setBookingData] = useState([]);
  const [filteredBookingData,setFilteredBookingData] = useState([]);
  const [updateStatus,setUpdateStatus] = useState("");
  const [updateId,setUpdateId] = useState("");
  const [confirmAction,setConfirmAction] = useState("");
  const [deleteId,setDeleteId] = useState("");
  const [completedAmount,setCompletedAmount] = useState(0);

  const confirmRef = useRef();

  useEffect(() => {
    getBookingData();
  },[]);

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

  useEffect(() => {
    setFilteredBookingData(bookingData);
  },[bookingData]);

  // update booking status to "accepted"
  const updateToStatus = async (status,id) => {
    showConfirmBox();
    // set the status, status update id and confirmStatus
    setUpdateStatus(status);
    setUpdateId(id);
    setConfirmAction("updateStatus");
  }

  // delete booking orders
  const deleteBooking = async (id) => {
    showConfirmBox();
    setConfirmAction("deleteOrder");
    setDeleteId(id);
  }

  // show confirm box 
  const showConfirmBox = () => {
    confirmRef.current.style.left = "0"
  }

  // hide confirm box
  const hideConfrimBox = () => {
    confirmRef.current.style.left = "-100%";
  }

  const confirmYes = async () => {

    if (confirmAction === "deleteOrder") {
        try {
          // here delete the doc booking order by id
          await deleteDoc(doc(db,"bookings",deleteId));
          let newBookingData = bookingData.filter(data => data.id !== deleteId);
          setBookingData(newBookingData);
          toast.success("Succefully Deleted the Booking Order",{hideProgressBar: true,autoClose: 1500});
          hideConfrimBox();
          setDeleteId("");
      } catch (err) {
          toast.error(err.message,{hideProgressBar: true,autoClose: 15000})
      }
    }

    if (confirmAction === "updateStatus") {
      let resultDataIndex = bookingData.findIndex(data => data.id === updateId);

      if (resultDataIndex <= -1) {
        return;
      }

      try {
        // here set the status 
          await setDoc(doc(db,"bookings",updateId),{
              status: updateStatus
          },{merge: true});
          let tempData = bookingData[resultDataIndex];
          tempData.status = updateStatus;
          let tempBookingData = bookingData;
          tempBookingData.splice(resultDataIndex,1,tempData);
          setBookingData([...tempBookingData]);
          toast.success(`Succesfully updated to status: ${updateStatus}`,{hideProgressBar: true,autoClose: 1500});
          
          // if update status is "completed" then add the amount earned to analytics and also increment client numbers
          let analyticsData = await getDoc(doc(db,"analytics","xfSJOCX6A7u1H9IoggsO"));
          await setDoc(doc(db,"analytics","xfSJOCX6A7u1H9IoggsO"),{
            total_sales: +analyticsData.data().total_sales + +completedAmount,
            total_clients: +analyticsData.data().total_clients + 1
          },{merge: true});

          hideConfrimBox();
          setUpdateStatus("");
          setUpdateId("");
      } catch (err) {
          toast.error(err.message,{hideProgressBar: true,autoClose: 15000})
      }
    }
  }

  const filterBookingData = (e) => {
    let status = e.target.id;
    // if status is "all" then set to default
    if (status === "default") {
      setFilteredBookingData(bookingData);
      return;
    }
    setFilteredBookingData(bookingData.filter(data => data.status === status));
  }

  //confirm box modifications
  let confirmTitle = "";
  if (confirmAction === "updateStatus") {
    confirmTitle = `Are you sure about updating status to ${updateStatus} ?`;
  };
  if (confirmAction === "deleteOrder") {
    confirmTitle = "Are you sure about deleting this order ?";
  }

  return (
    <div id="booking_dashboard">
      <h3>Orders Dashboard </h3>
      <ul>
        <h5>Customers </h5>
        <div id="dashboard_btns">
          <button id="default" onClick={filterBookingData}>
            Default
          </button>
          <button
            id="accepted"
            onClick={filterBookingData}
          >
            Accepted
          </button>
          <button
            id="rejected"
            onClick={filterBookingData}
          >
            Rejected
          </button>
          <button
            id="ongoing"
            onClick={filterBookingData}
          >
            OnGoing
          </button>
          <button
            id="completed"
            onClick={filterBookingData}
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
                            key={data.id}
                            id={data.id}
                            name={data.name}
                            address={data.address}
                            email={data.email}
                            phone={data.phone}
                            package_type={data.package_type}
                            status={data.status}
                            ordered_on={data.ordered_on}
                            complete_on={data.complete_on}
                            onUpdateStatus={updateToStatus}
                            onDeleteBooking={deleteBooking}
                        />
            })
        }
      </div>
      <div id="confirmBox_container" ref={confirmRef}>
        <div id="confirmBox">
          <h4>
            {
              confirmTitle
            }
          </h4>
          <p>
            You must very carefully consider this action otherwise it can affect greatly to your customers and yourself.
          </p>
          {
            updateStatus !== "completed" ? null : 
            <label>
              How much earned here?<br></br>
              <input type="number" id="inp" value={completedAmount} onChange={(e) => setCompletedAmount(e.target.value)} placeholder="total money earned" required/>
            </label>
          }
          <div id="confirm_btns">
            <button id="confirm_yes" onClick={confirmYes}>
              Yes, I&rsquo;m sure
            </button>
            <button id="confirm_no" onClick={hideConfrimBox}>
              No, cancel
            </button>
          </div>
          <small>
            NOTE: This action also encourges to send email notification to customer and yourself
          </small>
        </div>
      </div>
    </div>
  );
}

function SingleOrder({name,id,address,email,phone,package_type,status,ordered_on,complete_on,onUpdateStatus,onDeleteBooking}) {

  const [showBtns,setShowBtns] = useState(false);
  const bookingRef = useRef();

  const showActionsBtns = () => {
    if (showBtns) {
      setShowBtns(false);
      bookingRef.current.style.height = "290px";
    } else {
      setShowBtns(true);
      bookingRef.current.style.height = "auto";
    }
  }

    const updateToStatus = (e) => {
        let newStatus = e.target.value;
        onUpdateStatus(newStatus,id);
    }

    const deleteSingleBooking = () => {
        onDeleteBooking(id);
    }

    return (
        <div className={"single_order" + " " + status} ref={bookingRef} onClick={showActionsBtns}>
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
            {
              !showBtns ? null :
                <>
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
              </>
            }
        </div>
    )
}

export default Dashboard;
