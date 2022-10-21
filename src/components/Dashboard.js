import { connect } from "react-redux";
import ShortPollView from "./ShortPollView"

const Dashboard = (props)=>{

    const {questionAnsweredIds, questionUnAnsweredIds} = props

    return (
        <div>
            <div className="container">
                <h3 className="center">New Questions</h3>
                <hr></hr>
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
            <div className="container">
                <h3 className="center">Done</h3>
                <hr></hr>
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
        </div>
    )
}

const mapStateToProps = ({questions, authedUser, users})=>{
    const questionIds = Object.keys(questions);

    const questionAnsweredIds = Object.keys(users[authedUser].answers).sort(
        (a,b) => questions[b].timestamp - questions[a].timestamp
    );

    const questionUnAnsweredIds = 
    questionIds.filter(id=>!questionAnsweredIds.includes(id)).sort(
        (a,b) => questions[b].timestamp - questions[a].timestamp
    );

    return {   
        questionAnsweredIds,
        questionUnAnsweredIds,
    }
}

export default connect(mapStateToProps)(Dashboard);