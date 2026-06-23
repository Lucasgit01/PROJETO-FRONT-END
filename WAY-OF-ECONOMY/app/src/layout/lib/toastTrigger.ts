import { toast, type ToastOptions } from "react-hot-toast";

class ToastTrigger {
    public success(message: string, options?: ToastOptions) {
        return toast.success(
            message, {
            ...options,
            style: {
                backgroundColor: "#29ad6bf3",
                color: "white",
                whiteSpace: "pre-line"
            },
            iconTheme: {
                primary: "#ffffff",
                secondary: "#26c548"
            },
        })
    }

    public error(message: string, options?: ToastOptions) {
        return toast.error(
            message, {
            ...options,
            style: {
                backgroundColor: "#b6224ef3",
                color: "white",
                whiteSpace: "pre-line"
            },
            iconTheme: {
                primary: "rgb(255, 255, 255)",
                secondary: "#c52359ef"
            }
        })
    }
    
}

export default new ToastTrigger();