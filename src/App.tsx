import React from "react";
// import HelloWorld from "components/HelloWorld";
import HelloWorld from "components/HelloWorld";
import {Headerbar} from "components/HeaderBar";
import {RecoilRoot} from "recoil";
import {RecentAchievementCard} from "components/RecentAchievementCards/RecentAchievementCard";

const App = () => {
    return (
        <RecoilRoot>
            <div>
                <Headerbar />
                <RecentAchievementCard />
                <HelloWorld />
            </div>
        </RecoilRoot>
    );
};

export default App;
