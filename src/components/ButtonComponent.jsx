/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useDispatch, useSelector } from 'react-redux';
import { findIndex, searchCandidates } from '../utils.js';
import { addUserHire, replaceOneUser } from '../store/slices';

export const ButtonComponent = ({ text, email, index }) => {
    const dispatch = useDispatch();

    // traemos el array de la slice users
    const usersArray = useSelector(state => state.users.users);

    const saveNewOneUser = async (url)=>{
        if (index !== null) {
            const result = await searchCandidates(url);

            const { login, picture, name, location, email, cell } = result[0];

            const { uuid } = login;
            const full_name = `${name.title}. ${name.first} ${name.last}`;
            const ubi = `Ubicacion ${location.city} (${location.country})`
            
            const newUser = {
                uuid,
                image: picture.large,
                name: full_name,
                location: ubi,
                email,
                cell
            }

            // const indexUser = findIndex(email, usersArray);
            console.log(index);

            dispatch(replaceOneUser({index,newUser}))
        }
    }

    // encontrar y guardar index del usuario q agrego o oculto
    //reemplazar en el mismo lugar q el index guardado el usario nuevo 
    const addUser = () => {
        const indexUser = findIndex(email, usersArray);
        console.log(indexUser);

        const user = { ...usersArray[indexUser], departamento: "" };

        dispatch(addUserHire(user));
        
        saveNewOneUser("https://randomuser.me/api/?results=1");

    }

    const deleteUser = () => {
        // const indexUser = findIndex(email, usersArray);

        saveNewOneUser("https://randomuser.me/api/?results=1");

    }

    return (
        <>
            {
                text === "Guardar" ? <button onClick={addUser}>{text}</button> : <button onClick={deleteUser}>{text}</button>
            }
        </>
    )
}
