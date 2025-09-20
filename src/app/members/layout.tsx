import { Metadata } from "next";
import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

export const metadata: Metadata = {
    title: "メンバー",
};

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <>
            <Hero
                title="Members"
                sub="メンバー"
            />
            <Sheet>{children}</Sheet>
        </>
    );
}
