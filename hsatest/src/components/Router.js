import {useState, useEffect} from 'react';

const Router = ({children, pathName}) => {

    const [currentLoaction, setCurrentLocation] = useState(window.location.pathname);

    useEffect(() => {
            const onLocationChange = () => {
            setCurrentLocation(window.location.pathname)
        }

        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [])

    // console.log(window.location.pathname === pathName ? children : null )

    return (
        currentLoaction === pathName ? children : null 

    );
}

export default Router;
