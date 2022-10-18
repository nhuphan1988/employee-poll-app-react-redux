import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = (props) => {
    const {users, authedUser} = props;
    // const avatar = users[authedUser].avatarURL;

    return (
        <div>
            <nav className="left-nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/leaderboard">Leaderboard</Link>
                    </li>
                    <li>
                        <Link to="/new">New</Link>
                    </li>
                </ul>
            </nav>
            <nav className="right-nav">
                <ul>
                    <li>
                        <img src={"abc"} alt={`Avatar of ${authedUser}`} className="avatar" />
                        <p>{authedUser}</p>
                    </li>
                </ul>
            </nav>
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