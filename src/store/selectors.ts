import {selector} from "recoil";
import {stuff} from "./atoms";

export const stuffState = selector({
    key: "stuffState",
    get: ({get}) => {
        const totalCost = get(stuff).reduce((a, b) => a + b.price * b.qty, 0);
        return {
            totalCost
        };
    }
});
