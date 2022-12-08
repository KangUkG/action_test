import React from "react";

const Topbottom = ({ isTop }) => {

    return (
        <>
        {isTop && <h2>Hi I'm Top</h2>}
        {!isTop && <h2>Hi I'm Bottom</h2>}
        </>
    );
}
export default Topbottom;