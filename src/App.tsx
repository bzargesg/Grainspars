import React from "react";
import {Headerbar} from "components/HeaderBar";
import {RecoilRoot} from "recoil";
import {RecentAchievementCardContainer} from "components/RecentAchievementCards/AchievementCardContainer";
import {Calendar} from "components/Calendar/Calendar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    wrapper: {
        background: "rgb(31.7%, 17.1%, 42.9%)",
        width: "auto",
        margin: 0
    }
}));
const App = () => {
    const classes = useStyles();
    return (
        <RecoilRoot>
            <Router>
                <div className={classes.wrapper}>
                    <Headerbar />
                    {/* <Route component={RecentAchievementCardContainer} path="/"></Route> */}
                    <Route component={Calendar} path="/"></Route>
                </div>
            </Router>
        </RecoilRoot>
    );
};

export default App;
