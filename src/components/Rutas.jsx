import { Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Usuarios } from './Usuarios';

export const Rutas = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/usuarios' element={<Usuarios />} />
            </Routes>
        </>
    )
}
