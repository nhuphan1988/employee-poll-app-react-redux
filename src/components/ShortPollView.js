import { connect } from "react-redux";
import {formatDate} from "../utils/_DATA";
import { Link, useNavigate } from "react-router-dom";

const ShortPollView = (props)=>{

    const navigate = useNavigate();

    const showDetailPoll = (e, id)=>{
        e.preventDefault ();
        navigate(`/question/${id}`);
        //Redirect to show full poll page

    }

    console.log(props)
    const {author, timestamp, id}= props.question
    return (
        <Link to={`/question/${id}`}>
            <div className="center question">
                <div className="question-info">
                    <div className="author">{author}</div>
                    <div className="date">{formatDate(timestamp)}</div>
                    
                        <button 
                            id="show"
                            className="show-question btn center"
                            onClick={(e)=>showDetailPoll(e, id)}
                            >
                            Show
                        </button>             
                </div>
            </div>
        </Link>
    )
}

const mapStateToProps = ({questions}, {id}) =>{
    const question = questions[id];

    return{
        question
    }
}

export default connect(mapStateToProps)(ShortPollView);