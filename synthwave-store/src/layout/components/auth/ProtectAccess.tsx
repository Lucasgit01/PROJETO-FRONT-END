import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "./authStore";

export const OnlyAuth = () => {
    const userStorage = localStorage.getItem("auth");
    const setAuthStore = useAuthStore((state) => state.setAuthData);
    const navigate = useNavigate()
    const [auth, _] = useState(userStorage ? true : false);

    useEffect(() => {
        if (!auth) {
            localStorage.removeItem("auth");
            setAuthStore({
                name: "",
                role: "",
                avatar: ""
            })
            navigate("/")
        };
    }, [auth])

    return (
        <Outlet />
    )
}