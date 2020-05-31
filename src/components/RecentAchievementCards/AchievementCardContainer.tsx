// import {RecentAchievementCard} from "./RecentAchievementCard";
import {achievement} from "./Types/achievement";
import {RecentAchievementCard} from "./RecentAchievementCard";
import React from "react";

export const RecentAchievementCardContainer = ({achievements}: {achievements: achievement[]}) => {
    // console.log(props);
    return (
        <div>
            {achievements.map((achievement: achievement) => (
                <RecentAchievementCard {...achievement} />
            ))}
        </div>
    );
};
