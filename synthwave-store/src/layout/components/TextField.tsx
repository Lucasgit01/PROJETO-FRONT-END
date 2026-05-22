import type React from "react"
import "../assets/InputText.css"

type Props = React.InputHTMLAttributes<HTMLInputElement>

const defaultStyle: React.CSSProperties = {
    width: "70%",
    maxWidth: "90%",
    height: 80
}

export const TextInput = (inputProp: Props) => {
    return (
        <input  className="input" {...inputProp} style={{ ...inputProp.style ?? defaultStyle }} />
    )
}