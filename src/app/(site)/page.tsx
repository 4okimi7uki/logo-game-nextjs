"use client";

import Link from "next/link";

export default function TopPage() {
    return (
        <section className="h-full">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="main_title neonText">LOGO GAME</h1>
                <p className="main_sub_title">- How many logos do you know? -</p>
                <Link
                    href={"/play"}
                    className="h-[50px] w-[100px] rounded-[10px] hover:bg-[#cfcfcf9d] hover:text-[#333] text-[22px] flex items-center justify-center text-white"
                >
                    START
                </Link>
            </div>
        </section>
    );
}
