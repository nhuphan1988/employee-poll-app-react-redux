import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogIn } from "../actions/authedUser";

const Nav = (props) => {
    const {users, authedUser, dispatch} = props;
    
    let avatar = ""
    if (authedUser !== null){
        avatar = users[authedUser].avatarURL;
    }

    const handleLogout =(e)=>{
        e.preventDefault();
        const id = null;
        console.log(id)
        dispatch(handleLogIn(id));

    }

    return (
        <div>
            <nav className="nav">
                <ul>
                    {authedUser !== null 
                    ? (
                        <div>
                            <li className="left-nav">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="left-nav">
                                <Link to="/leaderboard">Leaderboard</Link>
                            </li>
                            <li className="left-nav">
                                <Link to="/new">New</Link>
                            </li>
                            <li className="right-nav">
                                <img src={avatar} alt={`Avatar of ${authedUser}`} className="avatar" />
                                <div className="userid">{authedUser}</div>
                            </li>
                            <li className="right-nav" onClick={handleLogout}>
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