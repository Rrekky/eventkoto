import LoginPage from "./Login/Loginpage";
import banner from './images/banner.png';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CreateAcc from "./Login/CreateAcc";
import Sidebar from "./dashboard/sidebar";
import Dashboard from "./dashboard/dashboard"

function App() {  
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LoginPage}></Route>
        <Route path="/create" component={CreateAcc}></Route>
        <Route path="/dashboard"  component={Dashboard}></Route>
      </div>
    </Router>
  );
}

export default App;
