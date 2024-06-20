import {useSelector} from 'react-redux';
import {Trabajador} from './Trabajador'

export const Usuarios = () => {

    const usersHireArray = useSelector(state => state.usersHire.users);

    return (
        <>
            {usersHireArray.map((user,index)=> <div key={crypto.randomUUID()}>
                <Trabajador image={user.image} name={user.name} location={user.location} email={user.email} index={index} departamento={user.departamento}/>
            </div>)}
        </>
    )
}
