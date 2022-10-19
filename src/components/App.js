import { useEffect, Fragment} from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LogInBox from "./LogInBox";
import PollPage from "./PollPage";
import NewPoll from "./PollCreationPage";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import { Routes, Route, useNavigate, Navigate} from "react-router-dom";
// import { Redirect } from 'react-router';
import NotFound from "./NotFound";

const App = (props) =>{
    const navigate = useNavigate();

    useEffect(()=>{
        props.dispatch(handleInitialData());
    },[]);

    return (
        <Fragment>
            <div className="app-container">
                <Nav />    
                <Routes>
                    <Route exact path="/" element={!props.signIn ? <Navigate to="/login" /> : <Dashboard />} />
                    <Route path="/leaderboard" element={!props.signIn ? <Navigate to="/login" /> : <Leaderboard />} />
                    <Route path="/question/:id" element={!props.signIn ? <Navigate to="/login" /> : <PollPage />} />
                    <Route path="/new" element={!props.signIn ? <Navigate to="/login" /> : <NewPoll />} />
                    <Route path="*" element={!props.signIn ? <Navigate to="/login" /> : <NotFound />} />
                </Routes>
            </div>
        </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  signIn: authedUser !== null,
});

export default connect(mapStateToProps)(App);

// import {Navigate} from "react-router-dom";
// import {connect} from "react-redux";

// const PrivateRoute = ({children, loggedIn}) => {
//     const redirectUrl = window.location.href.toString().split(window.location.host)[1];

//     return loggedIn ? children : <Navigate to={`/login?redirectTo=${redirectUrl}`}/>;
// };

// const mapStateToProps = ({authedUser}) => ({
//     loggedIn: !!authedUser,
// });

// export default connect(mapStateToProps)(PrivateRoute);