import type { Metadata } from "next";
// import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

// const notoSansJP = Noto_Sans_JP({
//     variable: "--font-noto-sans-jp",
//     weight: ["400", "700"], // 必要な太さを指定
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Logo Game",
    description:
        "If you are an engineer or a hacker, you probably know a lot of programming languages, middleware, tools, and so on. Many of them have their own logos. This game challenges you to identify the correct logo names for each question.",
    icons: { icon: "./favicon.ico" },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>
    );
}
