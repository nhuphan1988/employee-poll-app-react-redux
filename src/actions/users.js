
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const USER_VOTE_QUESTION = "USER_VOTE_QUESTION";
export const USER_ADD_QUESTION = "USER_ADD_QUESTION";


export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function userVoteQuestion({authedUser, qid, answer, users}){
    return{
        type: USER_VOTE_QUESTION,
        authedUser,
        qid,
        answer,
        users,
    }
}

export function userAddQuestion(qid ,users, authedUser){
    return{
        type: USER_ADD_QUESTION,
        qid,
        users,
        authedUser,
    }
}