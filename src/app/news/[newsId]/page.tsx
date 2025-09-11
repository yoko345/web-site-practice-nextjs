import { notFound } from "next/navigation";
import Article from "@/app/_components/Article";
import styles from "./page.module.css";
import { getNewsDetail } from "@/app/_libs/microcms";
import ButtonLink from "@/app/_components/ButtonLink";

type Props = {
    params: {
        newsId: string;
    };
};

export default async function Page({ params }: Props) {
    const data = await getNewsDetail(params.newsId).catch(notFound);

    return (
        <>
            <Article data={data} />
            <div className={styles.footer}>
                <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
            </div>
        </>
    );
}
