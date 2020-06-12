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

const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px"
};
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: 100,
        [`@media ${device.mobileL}`]: {
            width: 500
        },
        padding: "20px",
        margin: "20px"
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
const cardStyles = {};

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
                title={props.header}
                subheader={props.subheader}
            />
            <CardMedia className={classes.media} title={props.header} image={props.imageUrl} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
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
