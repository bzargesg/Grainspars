import React from "react";
// import RecentAchievementCard from "./components/RecentAchievementCard";
import {Headerbar} from "components/HeaderBar";
import {RecoilRoot} from "recoil";
import {RecentAchievementCardContainer} from "components/RecentAchievementCards/AchievementCardContainer";
import {BrowserRouter as Router, Route} from "react-router-dom";

const App = () => {
    return (
        <RecoilRoot>
            <Router>
                <div>
                    <Headerbar />
                    <Route component={RecentAchievementCardContainer} path="/"></Route>
                </div>
            </Router>
        </RecoilRoot>
    );
};

export default App;
