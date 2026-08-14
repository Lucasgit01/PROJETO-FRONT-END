import { create } from "zustand";

type Stores = "way" | "sponsored" | "advertiser" | "all";

type ManagementActions = {
    store: Stores;
    setStore: (storeManager: Stores) => void
};

export const useManagementStore = create<ManagementActions>()((set) => ({
    store: "all",
    setStore: (storeManager) => {
        set(() => ({
            store: storeManager
        }))
    },
}));