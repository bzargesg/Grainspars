import React from "react";
// import RecentAchievementCard from "./components/RecentAchievementCard";
import {Headerbar} from "components/HeaderBar";
import {RecoilRoot} from "recoil";
import {RecentAchievementCardContainer} from "components/RecentAchievementCards/AchievementCardContainer";

const someObject = [
    {
        avatar: "I",
        imageUrl:
            "https://i1.wp.com/www.eternal-kingdom.com/wp-content/uploads/2020/05/Y-Raden.png?resize=1536%2C864&ssl=1",
        message: "Woo we did it",
        header: "Gravity vs Preparation",
        subheader: "Gravity vs. WeakAura2 101 (AKA Bic Wants Raw-Daddy the Dead Daddy)",
        info: "string"
    },
    {
        avatar: "B",
        imageUrl:
            "https://i1.wp.com/www.eternal-kingdom.com/wp-content/uploads/2020/05/Y-Raden.png?resize=1536%2C864&ssl=1",
        message: "Filler Message",
        header: "Filler",
        subheader: "fillermessage",
        info: "string"
    }
];

const App = () => {
    return (
        <RecoilRoot>
            <div>
                <Headerbar />
                <RecentAchievementCardContainer achievements={someObject} />
            </div>
        </RecoilRoot>
    );
};

export default App;
