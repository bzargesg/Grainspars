import React from "react";
import {useRecoilValue} from "recoil";
import {stuff, stuffState, useAddItem} from "../../store";

const HeaderBar = () => {
    const stuffUser = useRecoilValue(stuff);
    const {totalCost} = useRecoilValue(stuffState);
    console.table(stuffUser);
    const add = useAddItem();
    return (
        <div>
            HeaderBar
            <div>{totalCost}</div>
            <button onClick={() => add(stuffUser[0])} className="ui button positive">
                +
            </button>
        </div>
    );
};

export default HeaderBar;
