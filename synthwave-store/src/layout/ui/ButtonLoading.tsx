import React from "react";
import "../assets/LoadingButton.css";

interface LoadingButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loadingText?: string;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
    loadingText = "",
}) => {
    return (
        <div
            className={`loading-button`}
        >
            {loadingText}
            <span className="loading-dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </span>
        </div>
    );
};