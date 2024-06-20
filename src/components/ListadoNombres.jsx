import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
export const ListadoNombres = ({usersHireArray}) => {
    return (
        <div>
            {
                usersHireArray.map(user => <Link key={user.uuid} to="/usuarios">
                    <button>{user.name}</button>
                </Link>)
            }
        </div>
    )
}
