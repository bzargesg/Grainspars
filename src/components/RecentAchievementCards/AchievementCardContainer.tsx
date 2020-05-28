// import {RecentAchievementCard} from "./RecentAchievementCard";
import {achievement} from "./Types/achievement";
import {RecentAchievementCard} from "./RecentAchievementCard";
import React from "react";

export const RecentAchievementCardContainer = (props: achievement[]) => {
    return (
        <div>
            {props.map((achievement: achievement) => (
                <RecentAchievementCard {...achievement} />
            ))}
        </div>
    );
};
