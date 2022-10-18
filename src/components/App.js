import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LogInBox from "./LogInBox";
import PollPage from "./PollPage";
import NewPoll from "./PollCreationPage";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import PollCreationPage from "./PollCreationPage";

const App = (props) =>{
    useEffect(()=>{
        props.dispatch(handleInitialData());
    },[]);

    return (
        <Fragment>
            {/* <LoadingBar /> */}
            <div className="container">
                <Nav />
                <div>
                    {props.loading === true? null : (
                        <Routes>
                            <Route path="/" exact element={<Dashboard />} />
                            <Route path="/leaderboard" element={<Leaderboard />} />
                            <Route path="question/:id" element={<PollPage />} />
                            <Route path="/new" element={<PollCreationPage />} />
                        </Routes> 
                    )}
                </div>
            </div>
        </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);