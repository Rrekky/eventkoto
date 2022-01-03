import LoginPage from "./Login/Loginpage";
import banner from './images/banner.png';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CreateAcc from "./Login/CreateAcc";

function App() {  
  return (
    <Router>
    <div className="App">
    <Route exact path="/" component={LoginPage}></Route>
    <Route path="/create" component={CreateAcc}></Route>
      
    </div>
    </Router>
  );
}

export default App;
