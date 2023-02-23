import ProtectedRoute from "@/components/PotectedRoute";
import { useAuth } from "context/AuthContext";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const BookingData = [
  {
    name: "chawang sherpa",
    email: "cha@gmail.com",
    phone: "9802490930",
    address: "west-gate-10,sydney",
    status: "accepted",
    package_type: "Basic",
    ordered_on: "2020-20-20",
    complete_on: "2020-20-28",
    id: 1,
  },
  {
    name: "wangche sherpa",
    email: "wangcha@gmail.com",
    phone: "9802490930",
    address: "west-gate-10,melbourne",
    status: "ongoing",
    package_type: "Basic",
    ordered_on: "2020-20-20",
    complete_on: "2020-20-28",
    id: 2,
  },
  {
    name: "pasnag sherpa",
    email: "pasang@gmail.com",
    phone: "9802490930",
    address: "west-10,sydney",
    status: "completed",
    package_type: "Premium",
    ordered_on: "2020-20-20",
    complete_on: "2020-20-28",
    id: 3,
  },
  {
    name: "neonal rhai",
    email: "nionl@gmail.com",
    phone: "9802490930",
    address: "west-gate-10,sydney",
    status: "rejected",
    package_type: "Basic",
    ordered_on: "2020-20-20",
    complete_on: "2020-20-28",
    id: 4,
  },
];

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
        <h2>Welcome back admin </h2>{" "}
        <div id="btn_group">
          <button>Check Orders </button>{" "}
          <button onClick={hanldeLogOut}>Sign Out </button>{" "}
        </div>
        <BookingDashboard />
      </div>{" "}
    </ProtectedRoute>
  );
}

function BookingDashboard() {
  const [bookingData, setBookingData] = useState(BookingData);

  return (
    <div id="booking_dashboard">
      <h3>Orders Dashboard </h3>{" "}
      <ul>
        <h5>Customers </h5>{" "}
        <div id="dashboard_btns">
          <button
            id="accepted"
            onClick={() =>
              setBookingData(
                BookingData.filter((data) => data.status === "accepted")
              )
            }
          >
            Accepted{" "}
          </button>{" "}
          <button
            id="rejected"
            onClick={() =>
              setBookingData(
                BookingData.filter((data) => data.status === "rejected")
              )
            }
          >
            Rejected{" "}
          </button>{" "}
          <button
            id="ongoing"
            onClick={() =>
              setBookingData(
                BookingData.filter((data) => data.status === "ongoing")
              )
            }
          >
            OnGoing{" "}
          </button>{" "}
          <button
            id="completed"
            onClick={() =>
              setBookingData(
                BookingData.filter((data) => data.status === "completed")
              )
            }
          >
            Completed{" "}
          </button>{" "}
        </div>{" "}
      </ul>
      <div id="order_table">
        <table>
          <thead>
            <tr>
              <th> Name </th> <th> Email, Phone </th> <th> Address </th>{" "}
              <th> Time Period </th> <th> Package </th> <th> Status </th>{" "}
              <th> Action </th>{" "}
            </tr>{" "}
          </thead>

          <tbody>
            {" "}
            {bookingData.map((data, index) => {
              return (
                <SingleBooking
                  key={data.id}
                  name={data.name}
                  email={data.email}
                  phone={data.phone}
                  address={data.address}
                  ordered_on={data.ordered_on}
                  complete_on={data.complete_on}
                  package_type={data.package_type}
                  status={data.status}
                />
              );
            })}{" "}
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
}

function SingleBooking({
  name,
  email,
  phone,
  address,
  ordered_on,
  complete_on,
  package_type,
  status,
}) {
  return (
    <tr>
      <td> {name} </td>{" "}
      <td>
        {" "}
        {email} <br> </br> <br> </br> {phone}{" "}
      </td>{" "}
      <td> {address} </td>{" "}
      <td>
        {" "}
        {ordered_on} <br> </br> <br> </br> {complete_on}{" "}
      </td>{" "}
      <td> {package_type} </td> <td id={status}> {status} </td>{" "}
      <td id="table_btns">
        <button id="accepted">Accept </button>{" "}
        <button id="rejected">Reject </button>{" "}
        <button id="ongoing">ongoing </button>{" "}
        <button id="completed">completed </button>{" "}
      </td>{" "}
    </tr>
  );
}

export default Dashboard;
