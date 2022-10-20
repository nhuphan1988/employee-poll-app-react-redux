import {_saveQuestion} from "../utils/_DATA"

describe('_saveQuestion', () => {
    it('will return formated question and all expected fields are populated', async() => {
        const optionOneText = "Swimming";
        const optionTwoText = "Running";
        const author = "mtsamis";

        const result = await _saveQuestion({optionOneText, optionTwoText, author});

        expect(result.optionOne.text).toEqual(optionOneText);
        expect(result.optionTwo.text).toEqual(optionTwoText);
        expect(result.author).toEqual(author);
    });

    it('will return an error if incorrect data is passed to the function', async() => {
        const optionOneText = "x";

        await expect(_saveQuestion({optionOneText})).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");        
    });

})