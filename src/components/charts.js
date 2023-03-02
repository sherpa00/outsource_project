import { db } from "firebase.configs";
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import {BiDollarCircle,BiGroup,BiShoppingBag} from "react-icons/bi";
import {MdOutlineMiscellaneousServices} from "react-icons/md";
import Chart from "chart.js/auto";
import { Line,Doughnut } from "react-chartjs-2";
import { getDoc,doc } from "firebase/firestore";


function MyCharts() {

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
        toast.error("Soory ! Some Error Occured, Try Again",{hideProgressBar: true,autoClose: 1500});
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
        toast.error("Soory! Some Error Occured, Try Again",{hideProgressBar: true,autoClose: 1500});
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
        toast.error("Soory! Some Error Occured, Try Again",{hideProgressBar: true,autoClose: 1500});
      }
    }
  
    const TopChartData = [
      {
        title: "TOTAL SALES",
        value: "$"+chartsData.total_sales,
        color: "lightcoral",
        icon: <BiDollarCircle color="#eee"/>,
        id: 1
      },
      {
        title: "TOTAL ORDERS",
        value: chartsData.total_orders,
        color: "steelblue",
        icon: <BiShoppingBag />,
        id: 2
      },
      {
        title: "TOTAL CLIENTS",
        value: chartsData.total_clients,
        color: "purple",
        icon: <BiGroup />,
        id: 3
      },
      {
        title: "TOTAL SERVICES",
        value: chartsData.total_services,
        color: "limegreen",
        icon: <MdOutlineMiscellaneousServices />,
        id: 4
      },
    ]
  
    return (
      <div id="chart_container">
        <div id="top_charts">
          {
            TopChartData.map((data,index) => {
              return <SingleTopChart
                        key={data.id}
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

  export default MyCharts;