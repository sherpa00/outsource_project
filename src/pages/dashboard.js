import ProtectedRoute from "@/components/PotectedRoute";
import { useAuth } from "context/AuthContext";
import { db } from "firebase.configs";
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { createRef, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import {FaRegSadCry} from "react-icons/fa";
import {BiDollarCircle,BiGroup,BiShoppingBag} from "react-icons/bi";
import {MdOutlineMiscellaneousServices} from "react-icons/md";
import Chart from "chart.js/auto";
import { Line,Doughnut } from "react-chartjs-2";

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
        <Charts />
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
            } catch (err) {
                toast.error(err.message,{hideProgressBar: true,autoClose: 15000})
            }
            break;
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
                
            } catch (err) {
                toast.error(err.message,{hideProgressBar: true,autoClose: 15000})
            }
            break;
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
                
            } catch (err) {
                toast.error(err.message,{hideProgressBar: true,autoClose: 15000})
            }
            break;
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
                
            } catch (err) {
                toast.error(err.message,{hideProgressBar: true,autoClose: 15000})
            }
            break
        default:
            toast.error("Cannot update status right now.",{hideProgressBar: true,autoClose: 15000});
            break;
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

  //confirm box modifications

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


function Charts() {

  const TopChartData = [
    {
      title: "TOTAL SALES",
      value: "$14000",
      color: "lightcoral",
      icon: <BiDollarCircle color="#eee"/>
    },
    {
      title: "TOTAL ORDERS",
      value: "5000",
      color: "steelblue",
      icon: <BiShoppingBag />
    },
    {
      title: "TOTAL CLIENTS",
      value: "1200",
      color: "purple",
      icon: <BiGroup />
    },
    {
      title: "TOTAL SERVICES",
      value: "10",
      color: "limegreen",
      icon: <MdOutlineMiscellaneousServices />
    },
  ]

  return (
    <div id="chart_container">
      <div id="top_charts">
        {
          TopChartData.map((data,index) => {
            return <SingleTopChart
                      key={index}
                      title={data.title}
                      value={data.value}
                      color={data.color}
                      icon={data.icon}
                    />
          })
        }
      </div>
      <div id="bottom_charts">
        <LineBar />
        <DoughnutBar />
      </div>
    </div>
  )
}

function SingleTopChart({title,value,color,icon}) {

  let customBgStyles = {
    backgroundColor: `${color}`,
    color: "whitesmoke"
  };

  let customFontStyles = {
    color: `${color}`
  }

  return (
    <div className="single_top_chart">
          <div id="chart_icon" style={customBgStyles}>
            {icon}
          </div>
          <div id="chart_info">
            <span style={customFontStyles}>
              {title}
            </span>
            <strong>
              {value}
            </strong>
          </div>
      </div>
  )
}

function LineBar() {

  const randomArr = [];
  for (let i = 0; i <= 12; i++) {
    let rand = Math.floor(Math.random() * 200);
    randomArr.push(rand);
  }

  const data = {
    labels: ['Jan','Feb','Mar',"Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: "First Dataset",
        data: randomArr,
        fill: true,
        backgroundColor: "skyblue",
        tension: 0.2
      }
    ]
  }

  return (
    <div id="line_bar">
      <h3>
        Sales Analytics
      </h3>
      <Line data={data} id="linebar"/>
    </div>
  )
}

function DoughnutBar() {

  const data = {
    labels: [
      'Basic',
      'Standard',
      'Premium'
    ],
    datasets: [
      {
        label: 'All Around',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }
  ]
  };

  return (
    <div id="doughnut_bar">
      <h3>
        Package Consumptions
      </h3>
      <Doughnut data={data} id="doughnutbar"/>
    </div>
  )
}

export default Dashboard;
