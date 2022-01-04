import Leftside from "./Leftside";
import RegisterForm from "./registerform";

const CreateAcc = () => {
    return (
        <div className="login-page">
            <div className="left-side"><Leftside /></div>
            <div className="right-side-reg"><RegisterForm /></div>
        </div>
     );
}
 
export default CreateAcc;