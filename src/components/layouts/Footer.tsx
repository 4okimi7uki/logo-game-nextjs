import React from "react";
import { twMerge } from "tailwind-merge";

interface FooterProps {
    className?: string;
}

function Footer({ className }: FooterProps) {
    return (
        <footer className={twMerge("text-[#69227d] text-[12px] text-center", className)}>
            <p>© 2025 Mizuki Aoki</p>
        </footer>
    );
}

export default Footer;
