// context/CalendarControlContext.ts
import { createContext, useContext } from "react";

export interface GameControl {
    correctCount: number;
    onCorrectCount: () => void;
    isFinish: boolean;
    onFinish: () => void;
}

export const GameControlContext = createContext<GameControl | null>(null);

export const useGameContext = () => {
    const ctx = useContext(GameControlContext);
    if (!ctx) throw new Error("useGameContext must be used within a Provider");
    return ctx;
};
