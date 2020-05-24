import React from "react";
// import HelloWorld from "components/HelloWorld";
import HelloWorld from "components/HelloWorld";
import HeaderBar from "components/HeaderBar";
import {RecoilRoot} from "recoil";

const App = () => {
    return (
        <RecoilRoot>
            <div>
                <HeaderBar />
                <HelloWorld />
            </div>
        </RecoilRoot>
    );
};

export default App;
