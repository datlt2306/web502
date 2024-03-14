import React, { useContext } from "react";
import { CountContext } from "../main";
const Counter = () => {
    console.log(useContext(CountContext));
    return <div>Counter</div>;
};

export default Counter;
