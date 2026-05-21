import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/global-side-bar';
import { InitialPage } from '../pages/InitialPage';


export const Application = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path='/login' ></Route> */}
                {/* <Route element={<></>}> */}
                <Route path='/' element={<Sidebar />}>
                    <Route>
                        <Route path='home' element={<InitialPage />} />
                        <Route path='teste' element={<h1>Teste</h1>} />
                    </Route>
                </Route>
                {/* </Route> */}
            </Routes>
        </BrowserRouter>
    )
} 