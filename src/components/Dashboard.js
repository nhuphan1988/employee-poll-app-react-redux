import { connect } from "react-redux";
import ShortPollView from "./ShortPollView"

const Dashboard = (props)=>{
    console.log(props);

    const {questionIds,questionAnsweredIds} = props

    const questionUnAnsweredIds = 
        questionIds.filter(id=>!questionAnsweredIds.includes(id));

    console.log(questionUnAnsweredIds);

    return (
        <div>
            <div className="container">
            <h3 className="center">New Questions</h3>
            </div>
            <div className="container">
                <ul className="questions-list">
                {
                    questionAnsweredIds.map((id)=>(
                        <li className = "question-box" key={id}>
                            <div>
                                <ShortPollView id={id} />
                            </div>
                        </li>
                    ))
                }
                </ul>
            </div>
            <div className="container">
            <h3 className="center">Done</h3>
            </div>
            <div className="container">
                <ul className="questions-list">
                {
                    questionUnAnsweredIds.map((id)=>(
                        <li className = "question-box" key={id}>
                            <div>
                                <ShortPollView id={id} />
                            </div>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
        
    )


}

const mapStateToProps = ({questions, authedUser, users})=>(
    {   questionIds: Object.keys(questions),

        questionAnsweredIds: Object.keys(users[authedUser].answers).sort(
            (a,b) => questions[b].timestamp - questions[a].timestamp
        ),  
    }
)

export default connect(mapStateToProps)(Dashboard);