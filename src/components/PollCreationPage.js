import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const NewPoll = ({dispatch})=>{
    const navigate = useNavigate();

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
    
        dispatch(handleAddQuestion(textOptionOne, textOptionTwo));
    
        setTextOptionOne("");
        setTextOptionTwo("");
    
        navigate('/')
    };
      
    return(
        <div className="center">
            <h3 >Would You Rather</h3>
            <p >Create Your Own Poll</p>
            <form className="new-question" onSubmit={handleSubmit} >
                <p>Option One</p>
                <textarea
                    placeholder="Option One"
                    value={textOptionOne}
                    onChange={handleChangeOptionOne}
                    className="textarea"
                    maxLength={150}
                    />
                <p>Option Two</p>
                <textarea
                    placeholder="Option Two"
                    value={textOptionTwo}
                    onChange={handleChangeOptionTwo}
                    className="textarea"
                    maxLength={150}
                    />
                <button 
                    id="submit"
                    className="btn" 
                    type="submit" 
                    disabled={textOptionOne === "" && textOptionTwo === ""}
                    >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default connect()(NewPoll);