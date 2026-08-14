import { type LucideProps } from "lucide-react"
import React, { useState } from "react";
import { LoadingButton } from "./ButtonLoading";

type Props = {
    title: string,
    requested: boolean,
    requestedMsg?: string
    props?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    onClick?: () => void;
    colors?: {
        background?: string,
        details?: string
    }
    style?: React.CSSProperties
}

export const Button = ({ title, requested, requestedMsg, props, Icon, onClick, colors, style }: Props) => {
    const [hover, setHover] = useState(false);
    return (
        <button
            {...props}
            type="submit"
            disabled={requested}
            style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                width: "80%",
                padding: "15px 20px",
                background: !requested ? colors?.background || "linear-gradient(to left, #eae7ee, #ddc7d0)" : "linear-gradient(to left, #c9c9c9cb, #d1cedf94)",
                borderRadius: 15,
                border: "none",
                textAlign: "center",
                fontFamily: "Cabin, Sans Serif",
                textShadow: hover ? "0px 0px 8px #f5f5f5" : "",
                color: colors?.details || "black",
                cursor: "pointer",
                boxShadow: hover ? "0px 0px 3px #ece5e3" : "0px 0px 0px",
                alignItems: "center",
                columnGap: 5,
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
        >
            {!requested ?
                <p style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: 7
                }}>
                    {title}
                    <Icon scale={0.5} />
                </p> :
                <LoadingButton loadingText={requestedMsg || "Verificando"} />

            }
        </button>
    )
}