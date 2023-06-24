import { BiPieChartAlt,BiPurchaseTag,BiCalendar,BiUserCircle} from "react-icons/bi";
import {CiSettings} from "react-icons/ci";

import { Link } from "react-router-dom";
const Dashboard=()=>{
    return (

            <div className="Dashboard-container">

                    <div className="Dashboard-name">
                        Board.
                    </div>
                    <div className="Dashboard-elements">
                        <ul>
                            <li><Link to="/" ><BiPieChartAlt className="icons"/>Dashboard</Link></li>
                            <li><Link to="/transaction"><BiPurchaseTag className="icons"/>Transactions</Link></li>
                            <li><Link to="/schedules"><BiCalendar className="icons"/>Schedules</Link></li>
                            <li><Link to="/users"><BiUserCircle className="icons"/>Users</Link></li>
                            <li><Link to="/settings"><CiSettings className="icons"/>Settings</Link></li>
                        </ul>
                    </div>
                    <div className="Dashboard-footer">
                        <ul>
                            <li><Link to="/help">Help</Link></li>
                            <li><Link to="/contact us">Contact us</Link></li>
                        </ul>
                    </div>

            </div>

    )
}
export default Dashboard;