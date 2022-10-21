import { connect } from "react-redux"; 

const Leaderboard = (props) =>{
    const {users} = props;

    const data = []
    let item = {}
    Object.values(users).map(user=>{
        item = {
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            numofAnswers: Object.keys(user.answers).length,
            numofQuestions: user.questions.length
        }
        data.push(item);
        return data
    })

    const dataSorted = data
        .sort((a,b)=>b.numofAnswers - a.numofAnswers)    
        .sort((a,b)=>b.numofQuestions - a.numofQuestions)
        
    const columns = [
        {heading: 'User'},
        {heading: 'Answered'},
        {heading: 'Created'}
    ];

    return(
        <div className="App">
            <table className="table">
                <thead className="table-head">
                    <tr>
                        {columns.map((item, index)=> (
                            <th key={index}>{item.heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataSorted.map((user, index)=>(
                        <tr key={index}>
                            <td>
                                <img src={user.avatarURL} alt={`Avatar of ${user.id}`} className="avatar" />
                                <p data-testid="username" className="username">{user.name}</p>
                                <p className="userid">{user.id}</p>
                            </td>
                            <td data-testid="numofAnswers">{user.numofAnswers}</td>
                            <td data-testid="numofQuestions">{user.numofQuestions}</td>
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

