import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            className="px-[5px] py-[10px] min-h-[50px] cursor-pointer w-full border border-[#ffffff64] text-[#fff] rounded-[5px] backdrop-blur-[16px] backdrop-saturate-[180%] shadow-[0_5px_20px_rgba(25, 26, 27, 0.5)]"
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
