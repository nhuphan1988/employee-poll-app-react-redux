import { useEffect, Fragment} from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LogInBox from "./LogInBox";
import PollPage from "./PollPage";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import { Routes, Route} from "react-router-dom";
import NotFound from "./NotFound";
import PrivateRoutes from "./PrivateRoutes";

const App = (props) =>{

    useEffect(()=>{
        props.dispatch(handleInitialData());
    },[]);

    return (
        <Fragment>
            <div className="app-container">
                <Nav />
                <Routes>
                    <Route path="/login" element={<LogInBox />} />
                    <Route element={<PrivateRoutes signIn={props.signIn}/>}>
                        <Route exact path="/" element={<Dashboard />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                        <Route path="/questions/:id" element={<PollPage />} />
                        <Route path="/add" element={<NewPoll />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>  
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ authedUser }) => ({
  signIn: authedUser !== null,
});

export default connect(mapStateToProps)(App);