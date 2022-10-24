import { connect } from "react-redux";
import QuestionsList from "./QuestionsList";
import { useState } from "react";

const Dashboard = (props)=>{

    const {questionAnsweredIds, questionUnAnsweredIds} = props

    const [showUnanswered, setShowUnanswered] = useState(true);

    const handleToggle = (e)=>{
        e.preventDefault();
        setShowUnanswered(!showUnanswered)
    }

    return (
        <div>
            {showUnanswered && (
                <div className="container center">
                    <h3 className="center">New Questions</h3>
                    <hr></hr>
                    <QuestionsList questions = {questionUnAnsweredIds}/>
                    <button id = "click" className="btn center" onClick={handleToggle}>
                        Show Answered Questions
                    </button>
                </div>
            )}
            {!showUnanswered && (
                <div className="container center">
                    <h3 className="center">Done</h3>
                    <hr></hr>
                    <QuestionsList questions = {questionAnsweredIds}/>
                    <button id = "click" className="btn center" onClick={handleToggle}>
                        Show Unanswered Questions
                    </button>
                </div>
            )}
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