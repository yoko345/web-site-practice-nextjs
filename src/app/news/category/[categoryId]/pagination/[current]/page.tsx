import { notFound } from "next/navigation";
import NewsList from "@/app/_components/NewsList";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Category from "@/app/_components/Category";
import Pagination from "@/app/_components/Pagination";

type Props = {
    params: {
        categoryId: string;
        current: string;
    };
};

export default async function Page({ params }: Props) {
    const current = parseInt(params.current, 10);

    if (Number.isNaN(current) || current < 1) notFound();

    const category = await getCategoryDetail(params.categoryId).catch(notFound);

    const { contents: news, totalCount } = await getNewsList({
        filters: `category[equals]${category.id}`,
        limit: NEWS_LIST_LIMIT,
        offset: NEWS_LIST_LIMIT * (current - 1),
    });

    if (news.length === 0) notFound();

    return (
        <>
            <p>
                <Category category={category} />
                の一覧
            </p>
            <NewsList news={news} />
            <Pagination
                totalCount={totalCount}
                current={current}
                basePath={`/news/category/${category.id}`}
            />
        </>
    );
}
