import React from "react";

const MovielayoutHOC = (Component) =>
    ({...props}) =>{
        return (
            // there can be only one parent tag, here it is div
            <div>
                <Navbar />
                <Component {...props} />
                <div>Footer</div>
            </div>
        )
    }

export default MovielayoutHOC;
