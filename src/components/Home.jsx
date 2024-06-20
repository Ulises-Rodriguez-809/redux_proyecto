import { useDispatch, useSelector } from 'react-redux'
import { ButtonComponent } from "./ButtonComponent"
import { Cell } from "./Cell"
import { Email } from "./Email"
import { ImgComponent } from "./ImgComponent"
import { Location } from "./Location"
import { Name } from "./Name"
import { useEffect} from 'react'
import { resetState, saveUser} from '../store/slices'
import { ListadoNombres } from './ListadoNombres'
import { searchCandidates } from '../utils'

export const Home = () => {

    const dispatch = useDispatch();

    const usersArray = useSelector(state => state.users.users);
    const usersHireArray = useSelector(state => state.usersHire.users);

    const loadCandidates = async (url) => {
        const results = await searchCandidates(url);

        for (let user = 0; user < results.length; user++) {
            const { login, picture, name, location, email, cell } = results[user];

            const { uuid } = login;
            const full_name = `${name.title}. ${name.first} ${name.last}`;
            const ubi = `Ubicacion ${location.city} (${location.country})`

            dispatch(saveUser({
                uuid,
                image: picture.large,
                name: full_name,
                location: ubi,
                email,
                cell
            }))
        }
    }

    useEffect(() => {
        dispatch(resetState());

        loadCandidates("https://randomuser.me/api/?results=6");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {usersArray == [] ? "...loading" : <>
                {console.log(usersArray)}
                <div>
                    {usersArray.map((user,index) => <div key={crypto.randomUUID()} id={user.uuid}>
                        <div>
                            <ImgComponent imgSrc={user.image} />
                        </div>
                        <div>
                            <div>
                                <Name name={user.name} />
                            </div>
                            <div>
                                <Location location={user.location} />
                            </div>
                            <div>
                                <Email email={user.email} />
                                <Cell cell={user.cell} />
                            </div>
                        </div>
                        <div>
                            <ButtonComponent text={"Guardar"} email={user.email} index={index} />
                            <ButtonComponent text={"Ocultar"} email={user.email} index={index}/>
                        </div>
                    </div>)
                    }
                </div>
                <div>
                    <ListadoNombres usersHireArray={usersHireArray} />
                </div>
            </>
            }
        </>
    )
}
