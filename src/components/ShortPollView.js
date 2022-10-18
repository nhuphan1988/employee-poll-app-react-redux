import { connect } from "react-redux";
import {formatDate} from "../utils/_DATA";
import { Link } from "react-router-dom";

const ShortPollView = (props)=>{

    const showDetailPoll = (e, id)=>{
        e.preventDefault ();

        //Redirect to show full poll page

    }

    console.log(props)
    const {author, timestamp, id}= props.question
    return (
        <div className="question">
            <div className="question-info">
                <div className="center">{author}</div>
                <div className="center">{formatDate(timestamp)}</div>
                <Link to={`/question/${id}`}>
                    <button 
                        className="show-question btn center"
                        onClick={(e)=>showDetailPoll(e, id)}
                        >
                        Show
                    </button>
                </Link>
                                
            </div>
        </div>
    )
}

const mapStateToProps = ({questions}, {id}) =>{
    const question = questions[id];

    return{
        question
    }
}

export default connect(mapStateToProps)(ShortPollView);