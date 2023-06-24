import { BiPieChartAlt,BiPurchaseTag,BiCalendar,BiUserCircle} from "react-icons/bi";
import {CiSettings} from "react-icons/ci";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Dashboard=()=>{
    return (
            <div className="Dashboard-container">
                <div className="Dashboard-name">
                    Board.
                </div>
                <div className="Dashboard-elements">
                    <ul>
                        <li><BiPieChartAlt className="icons"/>Dashboard</li>
                        <li><BiPurchaseTag className="icons"/>Transactions</li>
                        <li><BiCalendar className="icons"/>Schedules</li>
                        <li><BiUserCircle className="icons"/>Users</li>
                        <li><CiSettings className="icons"/>Settings</li>
                    </ul>
                </div>
                <div className="Dashboard-footer">
                    <ul>
                        <li>Help</li>
                        <li>Contact us</li>
                    </ul>

                </div>
            </div>
    )
}
export default Dashboard;