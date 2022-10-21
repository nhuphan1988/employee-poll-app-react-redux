import { connect } from "react-redux";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Option from "./Option";

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

    const {question, users, authedUser} = props;

    let avatar = "";
    if (users && question){
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
    
    let numOfVotesOne= null;
    let numOfVotesTwo = null;
    if(question){
        numOfVotesOne= question.optionOne.votes.length;
        numOfVotesTwo= question.optionTwo.votes.length;
    }

    const numOfVotesTotal = numOfVotesOne+ numOfVotesTwo
    const percentageOfVotesOne= Math.round(numOfVotesOne/numOfVotesTotal * 100);
    const percentageOfVotesTwo= Math.round(numOfVotesTwo/numOfVotesTotal *100 );
    
    return(
        <div>
        {!question
        ? (<NotFound />)
        : (
            <div className="center">
                <h3>{`Poll by ${question.author}`}</h3>
                <img src={avatar} alt={`Avatar of ${question.author}`} className="big-avatar" />
                <div>Would You Rather</div>
                <div className="option-container">
                    <Option
                        className= "optionOne"
                        question = {question}
                        alreadyVoted = {alreadyVotedOne()}
                        option = "optionOne"
                        checkAlreadyVoted = {checkAlreadyVoted}
                        numOfVotesTotal = {numOfVotesTotal}
                        numOfVotesEach = {numOfVotesOne}
                        percentageOfVotes = {percentageOfVotesOne}
                    />
                    <Option
                        className= "optionTwo"
                        question = {question}
                        alreadyVoted = {alreadyVotedTwo()}
                        option = "optionTwo"
                        checkAlreadyVoted = {checkAlreadyVoted}
                        numOfVotesTotal = {numOfVotesTotal}
                        numOfVotesEach = {numOfVotesTwo}
                        percentageOfVotes = {percentageOfVotesTwo}
                    />
                </div>
            </div>
        )}
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
