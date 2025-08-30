import Button from "@/components/elements/Button";
import React from "react";

function PlayPage() {
    return (
        <div className="pt-[10px] px-[max(2%,14px)] h-full overflow-auto content-center">
            <div
                data-info="logo-display-area"
                className="w-full h-[70%] py-[5px] px-[2%] backdrop-blur-[16px] backdrop-saturate-[180%] bg-[#4040404b] rounded-[12px] border border-[#9595958b] shadow-[0_5px_20px_rgba(25, 26, 27, 0.5)] relative"
            >
                logo area
            </div>
            <div className="">
                <p className="text-[#fff]">Question. </p>
                <div data-info="answer-btn-area" className="grid grid-cols-2 gap-[5px] w-full h-[20%] overflow-hidden">
                    <Button>sss</Button>
                    <Button>sss</Button>
                    <Button>sss</Button>
                    <Button>sss</Button>
                </div>
            </div>
        </div>
    );
}

export default PlayPage;
