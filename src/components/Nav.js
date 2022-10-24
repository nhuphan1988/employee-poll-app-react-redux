import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogIn } from "../actions/authedUser";

const Nav = (props) => {
    const {users, authedUser, dispatch} = props;
    
    let avatar = ""
    if (authedUser !== null){
        avatar = users[authedUser].avatarURL;
    }

    // if user clicks logout button, will set authedUser to null and navigate to '/login'
    const handleLogout =(e)=>{
        e.preventDefault();
        const id = null;
        dispatch(handleLogIn(id));
    }

    return (
        <div>
            <nav className="nav">
                <ul>
                    {authedUser !== null 
                    ? (
                        <div>
                            <li data-testid = "home" className="left-nav">
                                <Link to="/">Home</Link>
                            </li>
                            <li data-testid = "leaderboard" className="left-nav">
                                <Link to="/leaderboard">Leaderboard</Link>
                            </li>
                            <li data-testid = "new" className="left-nav">
                                <Link to="/add">New</Link>
                            </li>
                            <li className="right-nav">
                                <img data-testid = "avatar" src={avatar} alt={`Avatar of ${authedUser}`} className="avatar" />
                                <div data-testid = "username" className="userid">{authedUser}</div>
                            </li>
                            <li data-testid = "logout" className="right-nav" onClick={handleLogout}>
                                <Link to="/login">Logout</Link>
                            </li>
                        </div>
                    )
                    : (
                        <li className="right-nav" onClick={handleLogout}>
                                <Link to="/login">Login</Link>
                        </li>
                    )
                }
                </ul>
            </nav>
            <hr></hr>
        </div>
    );
  };
  
const mapStateToProps = ({users, authedUser})=>{
    return{
        users,
        authedUser,

    }
}
export default connect(mapStateToProps)(Nav);