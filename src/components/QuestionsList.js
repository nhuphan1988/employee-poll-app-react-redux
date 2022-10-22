import ShortPollView from "./ShortPollView"

const QuestionsList = ({questions})=>{
    
    return (
        <div>
            <ul className="questions-list">
            {
                questions.map((id)=>(
                    <li className = "question-box" key={id}>
                        <div>
                            <ShortPollView id={id} />
                        </div>
                    </li>
                ))
            }
            </ul>
        </div>
        
    )
}

export default QuestionsList;