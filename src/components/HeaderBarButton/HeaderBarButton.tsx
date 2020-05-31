import React from "react";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerButton: {
            color: "white"
        }
    })
);

export const HeaderBarButton = (props: {text: string; route: string}) => {
    const classes = useStyles();
    const handleClick = () => {
        window.location.href = props.route;
    };
    return (
        <Button onClick={handleClick} className={classes.headerButton} variant="text">
            {props.text}
        </Button>
    );
};
