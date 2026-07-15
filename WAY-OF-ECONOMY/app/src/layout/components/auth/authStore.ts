import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Auth } from "../../../@types/Auth";

interface AuthStore extends Auth {
    setAuthData(data: Auth): void
    logout(): void
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            name: "",
            role: "",
            avatar: null,
            setAuthData: (data: Auth) => { set({ ...data }) },
            logout: () => {
                localStorage.removeItem("auth");
                set({ name: "", role: "", avatar: null });
            }
        }),
        {
            name: "auth",
            storage: createJSONStorage(() => localStorage)
        }
    ));