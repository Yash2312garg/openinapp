import {BiCreditCardAlt,BiLike,BiPurchaseTag,BiUser} from "react-icons/bi";
import PieChart from "./components.js/piechart";
import { useState, useEffect, useCallback } from "react";
import AppointmentInfo from "./components.js/appointmentinfo";
import LineChart from "./components.js/linechart";
const Content=()=>{
    let [appointmentList, setAppointmentList] = useState([]);
    const fetchData = useCallback(() => {
        fetch('./data.json')
          .then(response => response.json())
          .then(data => {
            setAppointmentList(data)
          })
      }, [])

      useEffect(() => {
        fetchData()
      }, [fetchData])

return(
    <div className="content">
        <div className="Total-Revenues">
            <div className="icon">
                <BiCreditCardAlt  size='30px'/>
            </div>
            <div className="text">
                <h5>Total Revenue</h5>
                <h1>$2,129,430</h1>
            </div>
        </div>
        <div className="Total-Transaction">
            <div className="icon">
                <BiPurchaseTag size='30px'/>
            </div>
            <div className="text">
                <h5>Total Transaction</h5>
                <h1>1,520</h1>
            </div>
        </div>
        <div className="Total-Likes">
            <div className="icon">
                <BiLike size='30px'/>
            </div>
            <div className="text">
                <h5>Total Likes</h5>
                <h1>9,721</h1>
            </div>
        </div>
        <div className="Total-Users">
            <div className="icon">
                <BiUser size='30px'/>
            </div>
            <div className="text">
                <h5>Total Users</h5>
                <h1>892</h1>
            </div>
        </div>
        <div className="Activities">
            <div>
                Activity
            </div>
            <div className="linediv">
                <LineChart/>
            </div>
        </div>
        <div className="Top-Products">Top Products<PieChart/></div>
        <div className="Todays-Schedule">
            <h3>Todays Schedule</h3>
            <ul className="appointmentul">
            {appointmentList.slice(appointmentList.length - 2)
            .map(appointment => (
                <AppointmentInfo key={appointment.id}
                appointment={appointment}
                />
            )
            )}

        </ul>

        </div>
    </div>
);
};
export default Content;