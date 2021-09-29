import React from 'react';

const NavigationLink = ({children, className, href}) => {

    const onClick = (event) => {
        event.preventDefault();
        console.log("onclickeddd")
        window.history.pushState({}, '', href);

        const navigationEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navigationEvent);
    }

    return (
        <a  href = {href} onClick={onClick} className={className}>
            {children}
        </a>
    );
}

export default NavigationLink
