import { LogInIcon } from "lucide-react"
import React, { useState } from "react";
import { LoadingButton } from "./ButtonLoading";

type Props = {
    title: string,
    requested: boolean,
    props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}

export const Button = ({ title, requested, props }: Props) => {
    const [hover, setHover] = useState(false);
    return (
        <button
            {...props}
            type="submit"
            disabled={requested}
            style={{
                display: "flex",
                marginTop: 40,
                justifyContent: "center",
                width: "80%",
                padding: "15px 20px",
                background: !requested ? "linear-gradient(to left, #1d288b, #332291)" : "linear-gradient(to left, #c9c9c9cb, #d1cedf94)",
                borderRadius: 15,
                border: "none",
                textAlign: "center",
                fontFamily: "Cabin, Sans Serif",
                textShadow: hover ? "0px 0px 8px #f5f5f5" : "",
                color: "white",
                cursor: "pointer",
                boxShadow: hover ? "0px 0px 5px #ffffff" : "0px 0px 0px",
                alignItems: "center",
                columnGap: 5,
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {!requested ?
                <p style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: 7
                }}>
                    {title}
                    <LogInIcon scale={0.5} />
                </p> :
                <LoadingButton loadingText="Verificando"/>
                
            }
        </button>
    )
}