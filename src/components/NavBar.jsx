/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom'

export const NavBar = () => {

    // https://reactrouter.com/en/main/hooks/use-location
    let location = useLocation();

    return (
        <>
            <nav>
                <ul>
                    <li>
                        {location.pathname.includes("/usuarios") ? <Link to="/">Home</Link> : <Link to="/usuarios">Usuarios</Link>}
                    </li>
                </ul>
            </nav>
        </>
    )
}
