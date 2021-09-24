import React from 'react';

const NavigationLink = ({children,className, href}) => {

    const onClick = ({event}) => {
        event.preventDefault();
        window.history.pushState({}, '', href);
    }

    return (
        <a className = {className} href = {href} onClick={onClick}>
            {children}
        </a>
    );
}

export default NavigationLink
