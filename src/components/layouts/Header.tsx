import { useGameContext } from "@/context/GameControlContext";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
    className?: string;
}

function Header({ className }: HeaderProps) {
    const { correctCount, timeLeft } = useGameContext();
    const score = correctCount;

    const leftNavItems = [
        {
            id: crypto.randomUUID(),
            icon: <FaRegSmile />,
            num: score,
        },
        {
            id: crypto.randomUUID(),
            icon: <MdOutlineTimer />,
            num: timeLeft,
        },
    ];

    return (
        <header
            className={twMerge(
                "text-[#fff] text-[20px] w-full h-[45px] bg-[#333] flex items-center justify-between py-0.5 px-[max(2%,15px)] shadow-[0_5px_20px_rgba(25,26,27,0.5)]",
                className
            )}
        >
            <nav data-info="left-area" className="h-full flex items center">
                <ul className="flex gap-5">
                    {leftNavItems.map((item) => {
                        return (
                            <li key={item.id} className="items-center flex">
                                {item.icon}
                                <span className="inline-block min-w-[30px] text-center mx-[10px]">{item.num}</span>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <nav data-info="right-area" className="flex h-full items-center gap-[10px]">
                <Link href={"/ranking"} className="h-full block">
                    <div
                        className="flex cursor-pointer gap-2 hover:bg-[#fcfcfc1f] transition-all duration-150 h-full items-center justify-center rounded-[5px] w-[50px]"
                        title="Ranking"
                        onClick={() => {}}
                    >
                        <FaRankingStar title="Ranking" className="text-[#fff] text-[28px]" />
                    </div>
                </Link>
                <Link href={"/"} className="h-full block">
                    <div
                        className="text-[#fff] flex cursor-pointer gap-2 hover:bg-[#fcfcfc1f] transition-all duration-150 h-full items-center justify-center rounded-[5px] w-[50px]"
                        title="logo"
                        onClick={() => {}}
                    >
                        logo
                    </div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
