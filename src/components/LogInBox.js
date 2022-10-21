import image from '../avatars/computer-science-1331579.png';
import { connect } from "react-redux";
import { handleLogIn} from "../actions/authedUser";
import { useNavigate} from "react-router-dom";
import { useState} from "react";

const LogInBox = (props)=>{
    const [logInUser, setLogInUser] = useState("");
    const [logInPassword, setLogInPassword] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const {users, dispatch} = props;

    const handleChangeUser = (e) => {
        const logInUser = e.target.value;
        setLogInUser(logInUser)
    };

    const handleChangePassword = (e) => {
        const logInPassword = e.target.value;
        setLogInPassword(logInPassword);
    };

    const passwordMatched=()=>{        
        if(users[logInUser] && users[logInUser].password === logInPassword){
            setError(false)
            return true
        }else{
            setError(true)
            return false;
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if (passwordMatched()=== true){
            dispatch(handleLogIn(logInUser));
            navigate(-1)
        }
        setLogInUser("");
        setLogInPassword("");
    }

    return (
        <div className='center'>
            <h3>Employee Polls</h3>
            <img src= {image} alt="login-img" className="image" />
            <div>Log In</div>
            <p></p>
            <form className="login" onSubmit={handleSubmit} >
                <div>
                    <p>User</p>
                    <textarea
                        data-testid="username-input"
                        placeholder="User"
                        value={logInUser}
                        onChange={handleChangeUser}
                        className="login-textarea"
                        maxLength={50}
                    />
                    <p>Password</p>
                    <textarea
                        data-testid="password-input"
                        placeholder="Password"
                        value={logInPassword}
                        onChange={handleChangePassword}
                        className="login-textarea"
                        maxLength={50}
                    />
                </div>
                <button
                    data-testid="submit-button"
                    id="submit"
                    className="btn" 
                    type="submit" 
                    disabled={logInUser === "" && logInPassword === ""}
                >Submit
                </button>
            </form>
            {error &&
                <h3 className="Error" data-testid="error-header">Username and Password are not valid. Please try again!</h3>
            }
        </div>  
    )
}

const mapStateToProps = ({users},{prevRoute})=>{
    return{
        users,
        prevRoute,
    }
}

export default connect(mapStateToProps)(LogInBox);