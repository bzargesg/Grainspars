// import {RecentAchievementCard} from "./RecentAchievementCard";
import {achievement} from "./Types/achievement";
import {RecentAchievementCard} from "./RecentAchievementCard";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {device} from "../../style/GlobalStyle";

const achievements = [
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
    },
    {
        avatar: "B",
        imageUrl:
            "https://i1.wp.com/www.eternal-kingdom.com/wp-content/uploads/2020/05/Y-Raden.png?resize=1536%2C864&ssl=1",
        message: "Filler Message",
        header: "Filler",
        subheader: "fillermessage",
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
const contentStyle = `{
    float: "right"
}`;

const useStyles = makeStyles((theme) => ({
    content: {
        display: "grid",
        "grid-template-columns": "33% 33% 33%",
        [`@media ${device.tablet}`]: {
            "grid-template-columns": "66%"
        },
        float: "right",
        width: "80%"
    }
}));

export const RecentAchievementCardContainer = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            {achievements.map((achievement: achievement) => (
                <RecentAchievementCard {...achievement} />
            ))}
        </div>
    );
};
