import Sidebar from "./sidebar";
import "./index.css"
import DashboardMain from "./dashboard-main";

const Dashboard = () => {
    return ( 
        <div className="dashboard">
        <Sidebar />
        <div className="dashboard-main">
        <DashboardMain />
        </div>
        </div>

     );
}
 
export default Dashboard;