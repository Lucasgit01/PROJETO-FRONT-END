import type React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Login.css";
import escudo from "../assets/images/Cyber Security Shield Flat Style.png"
import { Button } from "../ui/SubmitButton";
import { TextInput } from "../ui/TextField";
import { PswdInput } from "../ui/PasswordInput";
import { useState } from "react";
import { toast } from "react-toastify";
import { ControllerLogin } from "../../data/controllers/login.controller";
import { AlertCircle, X } from "lucide-react";

export const LoginForm = () => {
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>('')
    const [disable, setDisabled] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true);
        setDisabled(true);


        try {
            const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            if (!emailTest.test(email)) return setError(`Insira um email válido.\nEX: seuendereco@provedor.com`);
            if (!pass) return setError("Nenhuma senha informada.");
            
            setError("")

            const instanceValidator = new ControllerLogin(email, pass)
            const result = await instanceValidator.read();
            localStorage.setItem("auth", JSON.stringify(result));
            toast.success(`Olá, bem vindo de volta ${result.name}!`, {
                position: "bottom-right",
                autoClose: 3000,
                pauseOnHover: true,
                draggable: true,
            })
            setTimeout(() => {
                navigate("/home")
            }, 3000);
        } catch (error) {
            toast.error(`${(error as Record<string, string>).message}`, {
                position: "bottom-right",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                icon: <X/>
            })
        } finally {
            setDisabled(false);
            setLoading(false)
        }

    }
    return (
        <div className="background">
            <section className="section">
                <img className="top-image" src={escudo} width={100} /><br />
                {error && <div className="error"><AlertCircle /><p className="msg-error"> {error}</p></div>}
                <form className="form" onSubmit={handleLogin}>
                    <legend>Email</legend>
                    <TextInput onChange={(e) => setEmail(e.target.value)} />
                    <legend>Senha</legend>
                    <PswdInput onChange={(e) => setPass(e.target.value)} />
                    <Button title={"Entrar"} requested={loading} props={{ disabled: disable }} /><br />
                </form>
                <footer className="description">Faça o login para acessar a Área segura administrativa.</footer>
            </section>
        </div>
    )
}