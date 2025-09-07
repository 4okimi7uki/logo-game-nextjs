"use client";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { GameControlContext } from "@/context/GameControlContext";
import React, { useEffect, useState } from "react";

function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [correctCount, setCorrectCount] = useState<number>(0);
    const [isFinish, setIsFinish] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(30); // 初期の時間制限（３0秒）

    const handleCorrectCount = () => {
        setCorrectCount((pre) => pre + 1);
    };

    const handleFinish = (flg: boolean = true) => {
        setIsFinish(flg);
    };

    useEffect(() => {
        setIsFinish(false);
    }, []);

    return (
        <GameControlContext.Provider
            value={{
                correctCount: correctCount,
                onCorrectCount: handleCorrectCount,
                isFinish: isFinish,
                onFinish: handleFinish,
                timeLeft: timeLeft,
                onTimer: setTimeLeft,
            }}
        >
            <div className="w-full h-full grid grid-rows-[50px_1fr_30px]">
                <Header className="row-start-1 h-[50px]" />
                <main className="row-start-2 h-[calc(100svh-80px)] py-4 px-[max(2%,14px)]">{children}</main>
                <Footer className="row-start-3 h-[30px]" />
            </div>
        </GameControlContext.Provider>
    );
}

export default SiteLayout;
