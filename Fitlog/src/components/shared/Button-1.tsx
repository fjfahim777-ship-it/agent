import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

const Button = ({ children, onClick, className, disabled = false }: ButtonProps,) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`bg-lime-400 text-black font-semibold px-5 py-3 rounded-2xl flex items-center gap-2 hover:bg-lime-500 active:scale-95 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;