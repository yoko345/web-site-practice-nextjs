import { notFound } from "next/navigation";
import Article from "@/app/_components/Article";
import styles from "./page.module.css";
import { getNewsDetail } from "@/app/_libs/microcms";
import ButtonLink from "@/app/_components/ButtonLink";

type Props = {
    params: {
        newsId: string;
    };
    searchParams: {
        dk?: string;
    };
};

/*
 * キャッシュの保持期間
 * →指定しないと保持期間が無限となり、CDNのキャッシュが残ることに伴い、ユーザーのアクセス時にWebサーバーまでリクエストが到達しなくなることを防ぐ目的の指定
 */
// export const revalidate = 0;
export const revalidate = 10;

export default async function Page({ params, searchParams }: Props) {
    const data = await getNewsDetail(params.newsId, {
        draftKey: searchParams.dk,
    }).catch(notFound);

    return (
        <>
            <Article data={data} />
            <div className={styles.footer}>
                <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
            </div>
        </>
    );
}
