import { connect } from "react-redux";
import {handleVoteQuestion} from "../actions/shared";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TiHeartFullOutline } from "react-icons/ti";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
    };
  
    return ComponentWithRouterProp;
  };

const PollPage = (props)=>{

    console.log(props);
    const {dispatch, question, users, authedUser} = props;

    let avatar = "";
    if (users & question){
        avatar = users[question.author].avatarURL
    }

    const alreadyVotedOne = ()=>{
        if(question.optionOne.votes.includes(authedUser)){
            return true
        }
        return false
    }

    const alreadyVotedTwo = ()=>{
        if(question.optionTwo.votes.includes(authedUser)){
            return true
        }
        return false
    }

    const checkAlreadyVoted = ()=>{
        if (alreadyVotedOne() 
            || alreadyVotedTwo()){
            return true
        }
        return false
    }
    
    const handleVote = (e)=>{
        e.preventDefault();
        const answer = e.target.value;
        console.log(answer);
        console.log(authedUser);
        console.log(question.id)

        if(!checkAlreadyVoted()){
            dispatch(handleVoteQuestion({
                authedUser, 
                qid: question.id, 
                answer,
            }));
            alert("Thanks for voting!!!")
        }else{
            alert("You already answer this question");
        }
    }

    const numOfVotesOne= question.optionOne.votes.length;
    const numOfVotesTwo= question.optionTwo.votes.length;
    const numOfVotesTotal = numOfVotesOne+ numOfVotesTwo
    const percentageOfVotesOne= Math.round(numOfVotesOne/numOfVotesTotal * 100);
    const percentageOfVotesTwo= Math.round(numOfVotesTwo/numOfVotesTotal *100 );

    return(
        <div className="center">
            <h3>{`Poll by ${question.author}`}</h3>
            <img src={avatar} alt={`Avatar of ${question.author}`} className="big-avatar" />
            <div>Would You Rather</div>
            <div className="option-container">
                <div className="option">
                    <div className="option-text">{question.optionOne.text}</div>
                    {alreadyVotedOne() ===true ? (
                        <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
                    ): null}
                    <button
                        id="click"
                        className="btn" 
                        onClick={handleVote} 
                        value={"optionOne"}
                    >Click</button>
                    {numOfVotesTotal >0 && (
                        <div>
                            <div className="vote-info">Number of Votes: {numOfVotesOne}/{numOfVotesTotal}</div>
                            <div data-testid = "percentageOne" className="vote-info">Percentage of Votes: {percentageOfVotesOne} % </div>
                        </div>
                    )}
                </div>
                <div className="option">
                    <div className="option-text"> {question.optionTwo.text}</div>
                    {alreadyVotedTwo() === true ? (
                        <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
                    ): null}
                    <button 
                        id="click"
                        className="btn" 
                        onClick={handleVote} 
                        value={"optionTwo"}
                    >Click</button>
                    {numOfVotesTotal >0 && (
                        <div>
                            <div className="vote-info">Number of Votes: {numOfVotesTwo}/{numOfVotesTotal}</div>
                            <div data-testid = "percentageTwo" className="vote-info">Percentage of Votes: {percentageOfVotesTwo} %</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({questions, users, authedUser}, props)=>{
    const {id} = props.router.params;
    const question = questions[id];
    
    
    return{
        question,
        users,
        authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(PollPage));
