import NewsList from "@/app/_components/NewsList";
import { getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";

/*
 * キャッシュの保持期間
 * →0 秒、つまりキャッシュを使わずに、毎回オリジンサーバーにデータを取得しに行くようになる
 */
export const revalidate = 0;

export default async function Page() {
    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });

    return (
        <>
            <SearchField />
            <NewsList news={news} />
            <Pagination totalCount={totalCount} />
        </>
    );
}
