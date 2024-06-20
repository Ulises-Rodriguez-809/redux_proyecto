/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { ImgComponent } from "./ImgComponent"
import { Location } from "./Location"
import { Name } from "./Name"
import { deleteUserHire, selectDepartamento } from "../store/slices"
import { findIndex } from "../utils"

export const Trabajador = ({ image, name, location, email, index, departamento = "seleccionar" }) => {
    const dispatch = useDispatch();
    const usersHireArray = useSelector(state => state.usersHire.users);


    const saveDepartamento = (e) => {
        const departamento = e.target.value;
        dispatch(selectDepartamento({ departamento, index })); //recorda pasarlo como objeto
    }

    const deleteUser = (email) => {
        const indexUser = findIndex(email, usersHireArray);

        dispatch(deleteUserHire(indexUser));

    }

    return (
        <>
            <div>
                <div>
                    <ImgComponent imgSrc={image} />
                    <Name name={name} />
                    <Location location={location} />
                </div>
                <div>
                    {/* <ButtonComponent text={"Eliminar"} email={email} /> */}
                    <button onClick={()=>deleteUser(email)}>Eliminar</button>
                </div>
                <div>
                    <select name="jobs" defaultValue={departamento} onChange={(e) => saveDepartamento(e)}>
                        <option value={"seleccionar"} >Seleccionar puesto:</option>
                        <option value={"ventas"} >ventas</option>
                        <option value={"QA_Test"} >QA test</option>
                        <option value={"back-developer"} >back end</option>
                        <option value={"front-developer"} >front end</option>
                    </select>
                </div>
            </div>
        </>
    )
}
