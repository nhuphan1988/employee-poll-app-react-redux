import image from '../avatars/computer-science-1331579.png';
import { connect } from "react-redux";
import { handleLogIn} from "../actions/authedUser";
import { useNavigate} from "react-router-dom";

const LogInBox = (props)=>{
    const navigate = useNavigate();

    const {users, dispatch} = props;

    const userIds = Object.keys(users);

    const handleChange=(e)=>{
        e.preventDefault();
        const id = e.target.value;
        console.log(id)
        dispatch(handleLogIn(id));

        if (id){
            navigate("/")
        }
    }

    return (
        <div className='center'>
            <h3>Employee Polls</h3>
            <img src= {image} alt="login-img" className="image" />
            <div>Log In</div>
            <p></p>
            <form className="login" >
                <div>
                    <select onChange={handleChange}>
                        <option value="none">Please select user...</option>
                        {userIds.map(userid=>(
                        <option key={userid} value={userid}>
                            {userid}
                        </option>
                    ))}
                    </select>
                </div>
            </form>
        </div>  
    )
}

const mapStateToProps = ({users})=>{
    return{
        users,
    }
}

export default connect(mapStateToProps)(LogInBox);