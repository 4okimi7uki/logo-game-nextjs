"use client";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { GameControlContext } from "@/context/GameControlContext";
import React, { useState } from "react";

function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [correctCount, setCorrectCount] = useState<number>(0);
    const [isFinish, setIsFinish] = useState<boolean>(false);

    const handleCorrectCount = () => {
        setCorrectCount((pre) => pre + 1);
    };

    const handleFinish = () => {
        setIsFinish(true);
    };

    return (
        <GameControlContext.Provider
            value={{
                correctCount: correctCount,
                onCorrectCount: handleCorrectCount,
                isFinish: isFinish,
                onFinish: handleFinish,
            }}
        >
            <div className="w-full h-full flex flex-col justify-stretch">
                <Header />
                <main className="h-full">{children}</main>
                <Footer />
            </div>
        </GameControlContext.Provider>
    );
}

export default SiteLayout;
