import LoginPage from "./Login/Loginpage";
import banner from './images/banner.png';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CreateAcc from "./Login/CreateAcc";
import Sidebar from "./dashboard/sidebar";
import Dashboard from "./dashboard/dashboard"
import Calendar from "./calendar/calendar";
import Upcoming from "./calendar/eventlist";
import Finished from "./calendar/Detailbox";

function App() {  
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LoginPage}></Route>
        <Route path="/create" component={CreateAcc}></Route>
        <Route path="/dashboard"  component={Dashboard}></Route>
        <Route path="/calendar" component={Calendar}></Route>
        <Route path="calendar/upcoming" component={Upcoming}> </Route>
        <Route exact path="calendar/finished" component={Finished}> </Route>
      </div>
    </Router>
  );
}

export default App;
