import { connect } from "react-redux";
import {handleVoteQuestion} from "../actions/shared";
import { useLocation, useNavigate, useParams } from "react-router-dom";

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

    const navigate = useNavigate();

    console.log(props);
    const {dispatch, question, avatar, authedUser} = props;

    const checkAlreadyVoted = ()=>{
        if (question.optionOne.votes.includes(authedUser) 
            || question.optionTwo.votes.includes(authedUser)){
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

            

        }else{
            alert("You already answer this question");
        }
    }

    return(
        <div className="center">
            <div>{`Poll by ${question.author}`}</div>
            <img src={avatar} alt={`Avatar of ${question.author}`} className="avatar" />
            <div>Would You Rather</div>
            <div className="option-container">
                <div className="option">
                    <div>{question.optionOne.text}</div>
                    <button 
                        className="btn" 
                        onClick={handleVote} 
                        value={"optionOne"}
                    >Click</button>
                </div>
                <div className="option">
                    <div>{question.optionTwo.text}</div>
                    <button 
                        className="btn" 
                        onClick={handleVote} 
                        value={"optionTwo"}
                    >Click</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({questions, users, authedUser}, props)=>{
    const {id} = props.match.params;
    const question = questions[id];
    const avatar = users[question.author].avatarURL
    
    return{
        question,
        avatar,
        authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(PollPage));
