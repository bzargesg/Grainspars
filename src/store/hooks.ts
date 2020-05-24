import {useRecoilState} from "recoil";
import {stuff} from "./atoms";

const cloneIndex = (items, id) => ({
    clone: items.map((item) => ({...item})),
    index: items.findIndex((item) => item.id === id)
});

export const useAddItem = () => {
    const [items, setItems] = useRecoilState(stuff);
    return (product) => {
        const {clone, index} = cloneIndex(items, product.id);
        if (index !== -1) {
            clone[index].qty += 1;
            setItems(clone);
        } else {
            setItems([...clone, {...product, qty: 1}]);
        }
    };
};
