import ProtectedRoute from "@/components/PotectedRoute";
import { useAuth } from "context/AuthContext";
import { db } from "firebase.configs";
import { collection,deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
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
    
    switch (status) {
        case "accepted":
            // set doc.status to accepted
            setUpdateStatus(status);
            setUpdateId(id);
            setConfirmAction("updateStatus");
            break;
        case "rejected":
            // set doc.status to rejected
            setUpdateStatus(status);
            setUpdateId(id);
            setConfirmAction("updateStatus");
            break;
        case "ongoing":
            // set doc.status to ongoing
            setUpdateStatus(status);
            setUpdateId(id);
            setConfirmAction("updateStatus");
            break;
        case "completed":
            // set doc.status to completed
            setUpdateStatus(status);
            setUpdateId(id);
            setConfirmAction("updateStatus");
            break
        default:
            toast.error(`Succesfully updated to status: ${status}`,{hideProgressBar: true,autoClose: 15000});
            break;
    }
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


function Charts() {

  const [chartsData,setChartsData] = useState({
    total_sales: 0,
    total_orders: 0,
    total_clients: 0,
    total_services: 0,
  });
  const [chartsLineData,setChartsLineData] = useState([]);
  const[chartsBarData,setChartsBarData] = useState([]);

  useEffect(() => {
    fetchAnalyticsData();
    fetchLineAnalyticsData();
    fetchBarAnalyticsData();
  },[]);

  const fetchAnalyticsData = async () => {
    try {
      let jsonData = await getDoc(doc(db,"analytics","xfSJOCX6A7u1H9IoggsO"));
      if (jsonData.exists()) {
        setChartsData(jsonData.data());
      } else {
        toast.error("Soory! Some Error occured",{hideProgressBar: true,autoClose: 1500})
      }
    } catch (err) {
      toast.error(err.message,{hideProgressBar: true,autoClose: 1500});
    }
  }

  const fetchLineAnalyticsData = async () => {
    try {
      let jsonData = await getDoc(doc(db,"analytics","Gp46D0NPNVqiFuJi7umq"));
      if (jsonData.exists()) {
        let newData = [
          +jsonData.data().jan,
          +jsonData.data().feb,
          +jsonData.data().mar,
          +jsonData.data().apr,
          +jsonData.data().may,
          +jsonData.data().jun,
          +jsonData.data().jul,
          +jsonData.data().aug,
          +jsonData.data().sep,
          +jsonData.data().oct,
          +jsonData.data().nov,
          +jsonData.data().dec,
        ];
        setChartsLineData(newData);
      } else {
        toast.error("Soory! Some Error occured",{hideProgressBar: true,autoClose: 1500})
      }
    } catch (err) {
      toast.error(err.message,{hideProgressBar: true,autoClose: 1500});
    }
  }

  const fetchBarAnalyticsData = async () => {
    try {
      let jsonData = await getDoc(doc(db,"analytics","yokEQtBtiBWUVgZM0Eu6"));
      if (jsonData.exists()) {
        let newData = [
          +jsonData.data().basic,
          +jsonData.data().standard,
          +jsonData.data().premium
        ]
        setChartsBarData(newData);
      } else {
        toast.error("Soory! Some Error occured",{hideProgressBar: true,autoClose: 1500})
      }
    } catch (err) {
      toast.error(err.message,{hideProgressBar: true,autoClose: 1500});
    }
  }

  const TopChartData = [
    {
      title: "TOTAL SALES",
      value: "$"+chartsData.total_sales,
      color: "lightcoral",
      icon: <BiDollarCircle color="#eee"/>
    },
    {
      title: "TOTAL ORDERS",
      value: chartsData.total_orders,
      color: "steelblue",
      icon: <BiShoppingBag />
    },
    {
      title: "TOTAL CLIENTS",
      value: chartsData.total_clients,
      color: "purple",
      icon: <BiGroup />
    },
    {
      title: "TOTAL SERVICES",
      value: chartsData.total_services,
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
        <LineBar 
          chartData={chartsLineData}  
        />
        <DoughnutBar 
          chartData={chartsBarData}
        />
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

function LineBar({chartData}) {

  const randomArr = [];
  for (let i = 0; i <= 12; i++) {
    let rand = Math.floor(Math.random() * 200);
    randomArr.push(rand);
  }

  const data = {
    labels: ['Jan','Feb','Mar',"Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: "This Year",
        data: [...chartData],
        fill: true,
        backgroundColor: "skyblue",
        tension: 0.3
      }
    ]
  }

  if (chartData.length <= 0) {
    return "loading...";
  }

  return (
    <div id="line_bar">
      <h3>
        Orders Analytics
      </h3>
      <Line data={data} id="linebar"/>
    </div>
  )
}

function DoughnutBar({chartData}) {

  const data = {
    labels: [
      'Basic',
      'Standard',
      'Premium'
    ],
    datasets: [
      {
        label: 'All Around',
        data: [...chartData],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }
  ]
  };

  if (chartData.length <= 0) {
    return "loading...";
  }

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
