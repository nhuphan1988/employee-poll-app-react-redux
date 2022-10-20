import { useEffect, Fragment} from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LogInBox from "./LogInBox";
import PollPage from "./PollPage";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import { Routes, Route, Navigate} from "react-router-dom";
import NotFound from "./NotFound";

const App = (props) =>{

    useEffect(()=>{
        props.dispatch(handleInitialData());
    },[]);

    return (
        <Fragment>
            <div className="app-container">
                <Nav />
                {!props.signIn 
                ? (
                    <Routes>
                        <Route path="/login" element={<LogInBox />} />
                    </Routes>
                )
                :(
                    <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/question/:id" element={<PollPage />} />
                    <Route path="/new" element={<NewPoll />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                )}   
                
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ authedUser }) => ({
  signIn: authedUser !== null,
});

export default connect(mapStateToProps)(App);