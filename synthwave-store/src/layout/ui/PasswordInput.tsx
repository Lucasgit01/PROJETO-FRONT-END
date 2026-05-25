import React, { useState } from "react"
import "../assets/PswdInput.css"
import { Eye, EyeOff, LockKeyhole } from "lucide-react";

type Props = React.InputHTMLAttributes<HTMLInputElement>

export const PswdInput = (inputProp: Props) => {
    const [view, setView] = useState(false);
    const [effect, setEffect] = useState(false);

    return (
        <div className="div-container" style={ effect ? { boxShadow: "0px 0px 5px white", border: "solid 1px blue" } : {}}>
            <div className="icon"><LockKeyhole /></div>
            <input
                onClick={() => setEffect(!effect)}
                className="input-pass" {...inputProp}
                type={view ? "text" : "password"}
            />
            <button type="button" className="eyes" onClick={() => setView(!view)}>
                {!view ? <Eye /> : <EyeOff />}
            </button>
        </div>
    )
}