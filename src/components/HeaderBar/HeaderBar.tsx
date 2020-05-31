import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import {createStyles, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > *": {
                margin: theme.spacing(1)
            }
        },
        headerButton: {
            color: "white"
        }
    })
);
export const Headerbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                {/* <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu"> */}
                {/* <MenuIcon /> */}
                {/* </IconButton> */}
                <Typography variant="h6" className="menuTitle">
                    Navigation
                </Typography>
                <Button className={classes.headerButton} variant="text">
                    Home
                </Button>
                <Button className={classes.headerButton} color="inherit">
                    About Us
                </Button>
                <Button className={classes.headerButton} color="inherit">
                    Teams
                </Button>
                <Button className={classes.headerButton} color="inherit">
                    Streams
                </Button>
                <Button className={classes.headerButton} color="inherit">
                    Forums
                </Button>
                <Button className={classes.headerButton} color="inherit">
                    Apply
                </Button>
                <Button className={classes.headerButton} color="inherit">
                    Logs
                </Button>
            </Toolbar>
        </AppBar>
    );
};

// import {AppBar} from "material-ui";
// import {useRecoilValue} from "recoil";
// import {stuff, stuffState, useAddItem} from "../../store";

// export const Headerbar = () => {
//     const stuffUser = useRecoilValue(stuff);
//     const {totalCost} = useRecoilValue(stuffState);
//     const add = useAddItem();
//     return (
//         <div>
//             HeaderBar
//             <div>{totalCost}</div>
//             <button onClick={() => add(stuffUser[0])} className="ui button positive">
//                 +
//             </button>
//         </div>
//     );
// };
