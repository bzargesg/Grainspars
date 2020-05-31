import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import {HeaderBarButton} from "../HeaderBarButton/HeaderBarButton";

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
                <Typography variant="h6" className="menuTitle">
                    Navigation
                </Typography>
                <HeaderBarButton text="Home" route="/" />
                <HeaderBarButton text="About Us" route="/about" />
                <HeaderBarButton text="Teams" route="/teams" />
                <HeaderBarButton text="Streams" route="/streams" />
                <HeaderBarButton text="Forums" route="/forums" />
                <HeaderBarButton text="Apply" route="/apply" />
                <HeaderBarButton text="Logs" route="/logs" />
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
