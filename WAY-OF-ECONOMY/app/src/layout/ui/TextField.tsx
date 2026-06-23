import type React from "react"
import "../assets/css/InputText.css"
import { MailIcon } from "lucide-react";
import { useState } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>

export const TextInput = (inputProp: Props) => {
    const [effect, setEffect] = useState(false);

    return (
        <div className="text-container" style={effect ? { boxShadow: "0px 0px 5px white", border: "solid 1px grey" } : {}}>
            <div className="icon-email"><MailIcon /></div>
                <input
                    onClick={() => setEffect(!effect)}
                    onBlur={() => setEffect(false)}
                    className="input-text" 
                    {...inputProp}
                    type="text"
                />
        </div>
    )
}