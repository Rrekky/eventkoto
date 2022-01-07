import Sidebar from "../dashboard/sidebar";
import '../dashboard/index.css'
import './index.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Upcoming from "./upcoming";
import Finished from "./finished"

const Calendar = () => {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2,
            }}
        />
    );


    return ( 
        <div className="calendar">
            <Sidebar />
            <div className="dashboard-main">
            <div className="title">CALENDAR OF EVENTS</div>
            <div className="hrline"><ColoredLine color="#262626" /></div>
            <div className="hrline">
                <NavLink to="/calendar/upcoming" className="calendarlink"> Upcoming </NavLink>
                <NavLink to="/calendar/finished" className="calendarlink"> Finished </NavLink>
            </div>
            <div className="calendarevents">
                <Upcoming />
                <Finished />
                
            </div>
            
        </div>
       
        </div>
     );
}
 
export default Calendar