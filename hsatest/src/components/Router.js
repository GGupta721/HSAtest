import React from 'react';

const Router = ({children, pathName}) => {
    console.log(window.location.pathname === pathName ? children : null )

    return (
        window.location.pathname === pathName ? children : children 

    );
}

export default Router;
