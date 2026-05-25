import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '../layout/components/global/GlobalSideBar';
import { InitialPage } from '../layout/pages/InitialPage';
import { LoginForm } from '../layout/components/FormLogin';

export const Application = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginForm />} ></Route>
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