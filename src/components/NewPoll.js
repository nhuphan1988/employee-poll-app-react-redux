import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";
import { useNavigate} from "react-router-dom";

const NewPoll = ({dispatch})=>{
    const navigate = useNavigate();

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [textOptionOne, setTextOptionOne] = useState("");
    const [textOptionTwo, setTextOptionTwo] = useState("");

    const handleChangeOptionOne = (e) => {
        const textOptionOne = e.target.value;

        console.log(textOptionOne)
        setTextOptionOne(textOptionOne);
    };

    const handleChangeOptionTwo = (e) => {
        const textOptionTwo = e.target.value;

        console.log(textOptionTwo)
        setTextOptionTwo(textOptionTwo);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!textOptionOne || !textOptionTwo){
            setSuccess(false);
            setError(true);

        }else{
            dispatch(handleAddQuestion(textOptionOne, textOptionTwo));
            setSuccess(true);
            setError(false);
            setTextOptionOne("");
            setTextOptionTwo("");
            // navigate('/')
        }  
    };
      
    return(
        <div className="center">
            <h3 >Would You Rather</h3>
            <p >Create Your Own Poll</p>
            <form className="new-question" onSubmit={handleSubmit} >
                <p>Option One</p>
                <textarea
                    data-testid="text-option-one"
                    placeholder="Option One"
                    value={textOptionOne}
                    onChange={handleChangeOptionOne}
                    className="textarea"
                    maxLength={150}
                    />
                <p>Option Two</p>
                <textarea
                    data-testid="text-option-two"
                    placeholder="Option Two"
                    value={textOptionTwo}
                    onChange={handleChangeOptionTwo}
                    className="textarea"
                    maxLength={150}
                    />
                <button 
                    id="submit"
                    data-testid="submit-button"
                    className="btn" 
                    type="submit" 
                    disabled={textOptionOne === "" && textOptionTwo === ""}
                    >
                    Submit
                </button>
            </form>
            {success &&
                <h3 className="Success" data-testid="success-header">Poll Submitted Successfully!</h3>
            }
            {error &&
                <h3 className="Error" data-testid="error-header">Error in submitting question. Please try again!</h3>
            }
        </div>
    )
}

export default connect()(NewPoll);