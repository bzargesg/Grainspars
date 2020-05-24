import {atom} from "recoil";

export const stuff = atom({
    key: "stuff",
    default: [
        {
            id: "apple",
            price: 3,
            qty: 4
        }
    ]
});
