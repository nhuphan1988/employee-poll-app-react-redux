import { connect } from "react-redux"; 

const Leaderboard = (props) =>{
    const {users} = props;

    const userList = Object.values(users);
    
    console.log(userList)

    const columns = [
        {heading: 'User'},
        {heading: 'Answered'},
        {heading: 'Created'}
    ];

    return(
        <div className="App">
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((item, index)=> (
                            <th key={index}>{item.heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, index)=>(
                        <tr key={index}>
                            <td>
                                <img src={user.avatarURL} alt={`Avatar of ${user.id}`} className="avatar" />
                                <p>{user.name}</p>
                                <p>{user.id}</p>
                            </td>
                            <td>{Object.keys(user.answers).length}</td>
                            <td>{user.questions.length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = ({users})=>{    
    return{
        users
    }
}

export default connect(mapStateToProps)(Leaderboard);

