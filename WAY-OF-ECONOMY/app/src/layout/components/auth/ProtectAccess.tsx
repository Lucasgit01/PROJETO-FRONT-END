import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "./authStore";

export const OnlyAuth = () => {
    const setAuthStore = useAuthStore((state) => state.setAuthData);
    const authStore = useAuthStore();
    const navigate = useNavigate()
    const [auth, _] = useState(authStore.role ? true : false);

    useEffect(() => {
        if (!auth) {
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