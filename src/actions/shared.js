import { getInitialData } from "../utils/api";
import { receiveUsers, userVoteQuestion, userAddQuestion } from "./users";
import { receiveQuestions, voteQuestion, addQuestion } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveQuestionAnswer, saveQuestion } from "../utils/api"

export function handleInitialData(){
    return(dispatch)=>{
        dispatch(showLoading());
        return getInitialData().then(({users,questions})=>{
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        })
    }
}

/* after voting, return the saveQuestionAnswer api to save change to backend,
 then add authedUser id to the votes array of answer question,
 and add question id to the questions array of authedUser in the users object.
 */
export function handleVoteQuestion({authedUser, qid, answer}){
    return (dispatch, getState) => {
        const { users } = getState();
        return saveQuestionAnswer({ authedUser, qid, answer })
        .then(()=>dispatch(voteQuestion({authedUser, qid, answer})))
        .then(()=>dispatch(userVoteQuestion({authedUser, qid, answer, users})))
    }
}


/* after adding, return the saveQuestion api to save change to backend,
 then add formated question to the questions object
 */
export function handleAddQuestion(optionOneText, optionTwoText){
    return(dispatch, getState)=>{
        const{ authedUser, users } = getState();

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
        })
        .then((question)=>dispatch(addQuestion(question )))
        .then((formatedQuestion)=>{            
            const qid = formatedQuestion.question.id
            dispatch(userAddQuestion(qid, users, authedUser))})
    }
}

