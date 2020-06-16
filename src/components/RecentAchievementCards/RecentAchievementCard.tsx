import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Collapse} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {achievement} from "./Types/achievement";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardActions from "@material-ui/core/CardActions";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {device} from "../../style/GlobalStyle";

const useStyles = makeStyles((theme) => ({
    root: {
        // [`@media ${device.mobileL}`]: {
        //     width: "60%"
        // },
        "background-color": "rgba(0, 0, 0, .8)",
        color: "white",
        width: "80%",
        padding: "25px",
        margin: "20px",
        "border-top": "2px solid #2482e3",
        display: "block",
        "overflow-wrap": "break-word",
        wordWrap: "break-word",
        wordBreak: "break-word"
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
        color: "white"
        // backgroundColor: "red[500]"
    }
}));

export const RecentAchievementCard = (props: achievement) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="achievement" className={classes.avatar}>
                        {props.avatar}
                    </Avatar>
                }
                className={classes.avatar}
                color="white"
                title={props.header}
                subheader={props.subheader}
            />
            <CardMedia className={classes.media} title={props.header} image={props.imageUrl} />
            <CardContent>
                <Typography variant="body2" color="white" component="p">
                    {props.message}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="Read More">
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{props.info}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};
