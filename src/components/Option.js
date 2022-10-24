import { TiHeartFullOutline } from "react-icons/ti";
import { connect } from "react-redux";
import {handleVoteQuestion} from "../actions/shared";

const Option = (props)=>{
    
    const { dispatch, authedUser, 
        question, checkAlreadyVoted, alreadyVoted, option, 
        numOfVotesTotal, numOfVotesEach, percentageOfVotes} = props;

    /* if question already voted, alert("You've already answered this question") 
    if not yet, call func handleVoteQuestion to change questions and users object in the store
    and then alert("Thanks for voting!!!") to let user knows
    */
    const handleVote = (e)=>{
        e.preventDefault();
        const answer = e.target.value;

        if(!checkAlreadyVoted()){
            dispatch(handleVoteQuestion({
                authedUser, 
                qid: question.id, 
                answer,
            }));
            alert("Thanks for voting!!!")
        }else{
            alert("You've already answered this question");
        }
    }

    return(
        <div className="option">
            <div className="option-text">{question[option].text}</div>
            {alreadyVoted === true 
                ? (
                <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
                    )
                : null}
                <button
                    id="click"
                    className="btn" 
                    onClick={handleVote} 
                    value={option}
                >Click
                </button>
                {numOfVotesTotal >0 && (
                    <div>
                        <div className="vote-info">Number of Votes: {numOfVotesEach}/{numOfVotesTotal}</div>
                        <div data-testid = "percentageOne" className="vote-info">Percentage of Votes: {percentageOfVotes} % </div>
                    </div>
                )}
        </div>
    )
}


const mapStateToProps = ({authedUser}, {
    question, checkAlreadyVoted, alreadyVoted, option, numOfVotesTotal, numOfVotesEach, percentageOfVotes})=>{
    
        return{
        authedUser,
        question, checkAlreadyVoted, alreadyVoted, option, numOfVotesTotal, numOfVotesEach, percentageOfVotes,
    }
}

export default connect(mapStateToProps)(Option);
