export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const VOTE_QUESTION = 'VOTE_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function voteQuestion({authedUser, qid, answer, users}){
    return{
        type: VOTE_QUESTION,
        authedUser,
        qid,
        answer,
        users,
    }
}

export function addQuestion(question ){
    return{
        type: ADD_QUESTION,
        question
    }
}



