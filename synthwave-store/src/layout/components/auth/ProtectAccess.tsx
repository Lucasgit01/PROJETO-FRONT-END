import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const OnlyAuth = () => {
    const userStorage = localStorage.getItem("auth");
    const navigate = useNavigate()
    const [auth, _] = useState(userStorage ? true : false);

    useEffect(() => {
        if (!auth) navigate("/");
    }, [auth])

    return (
        <Outlet />
    )
}