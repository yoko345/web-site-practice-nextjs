import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

type Props = {
    children: React.ReactNode;
};

/*
 * キャッシュの保持期間
 * →ニュース関連ページ全てに設定を行える
 */
export const revalidate = 10;

export default function RootLayout({ children }: Props) {
    return (
        <>
            <Hero
                title="News"
                sub="ニュース"
            />
            <Sheet>{children}</Sheet>
        </>
    );
}
