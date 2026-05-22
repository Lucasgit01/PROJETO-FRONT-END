import type React from "react"

type Props = {
    attributes: React.CSSProperties
}

export const LoginForm = ({ attributes }: Props) => {
    return (
        <section style={{ ...attributes || { alignSelf: "center", justifySelf: "center" } }}>
            <form onSubmit={() => {}}>
                
            </form>
        </section>
    )
}