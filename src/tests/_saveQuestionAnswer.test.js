import {_saveQuestionAnswer} from "../utils/_DATA";

describe('_saveQuestionAnswer', () => {
    it('will return answered question and return true', async() => {
        const authedUser = "sarahedo";
        const qid = "8xf0y6ziyjabvozdd253nd";
        const answer = "optionTwo";

        await expect(_saveQuestionAnswer({authedUser, qid, answer})).resolves.toBe(true);
    });

    it('will return an error if incorrect data is passed to the function', async() => {
        const authedUser = "sarahedo";
        const qid = "8xf0y6ziyjabvozdd253nd";

        await expect(_saveQuestionAnswer({authedUser, qid})).rejects
        .toEqual("Please provide authedUser, qid, and answer");        
    });
})





