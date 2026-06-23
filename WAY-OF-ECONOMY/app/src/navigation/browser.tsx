import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from '../layout/components/global/GlobalSideBar';
import { InitialPage } from '../layout/pages/InitialPage';
import { LoginForm } from '../layout/pages/FormLogin';
import { OnlyAuth } from '../layout/components/auth/ProtectAccess';

export const Application = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginForm />} ></Route>
                <Route element={<OnlyAuth />}>
                    <Route element={<Sidebar />}>
                        <Route path='home' element={<InitialPage />} />
                        <Route path='teste' element={<div>Teste</div>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 