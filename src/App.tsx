import React from "react";
// import HelloWorld from "components/HelloWorld";
import HelloWorld from "components/HelloWorld";
import {Headerbar} from "components/HeaderBar";
import {RecoilRoot} from "recoil";

const App = () => {
    return (
        <RecoilRoot>
            <div>
                <Headerbar />
                <HelloWorld />
            </div>
        </RecoilRoot>
    );
};

export default App;
