import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

export const Headerbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className="menuTitle">
                    News
                </Typography>
                <Button color="inherit">Login</Button>
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
