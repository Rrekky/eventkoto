import { Link } from "react-router-dom";
const Rightside = () => {
    return ( 
      <div className="right-side">
            <p> Welcome to </p>
          <h2> EVENTKOTO </h2>
          <span> Log in to get in the moment updates on the <br/>
events around you. </span>
        <form>
            <input className="login-text" 
            type="text"
            required
            />
            <input className="password-text" 
            type="text"
            required
            />
            <br/>
            <button className="btn-sign-in">Sign-in</button>
        </form>
        <p id="parag"> Don't have an account yet?    </p>
          <Link to="/create" id="paraga"><b> Sign up now</b></Link><br/>
          <p id="parag"> Forget password?</p>
          <a href="/" id="paraga"><b> Click here</b></a><br/>
      </div>
     );
}
 
export default Rightside;