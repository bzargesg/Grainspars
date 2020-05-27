import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: "red[500]"
    }
}));

export const RecentAchievementCard = () => {
    const classes = useStyles();
    return (
        <Card className="achievement card">
            <CardHeader
                avatar={
                    <Avatar aria-label="achievement" className="achievement cardHeader">
                        I
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Execute Order 66!"
                subheader="Team Empire - 12/12M US 198"
            />
            <CardMedia
                className={classes.media}
                title="M Nzoth down"
                image="https://i2.wp.com/www.eternal-kingdom.com/wp-content/uploads/2020/05/Nzoth-Kill.jpg?w=1431&ssl=1"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    We did it!
                </Typography>
            </CardContent>
        </Card>
    );
};
