import NewsList from "@/app/_components/NewsList";
import { getNewsList } from "@/app/_libs/microcms";

export default async function Page() {
    const { contents: news } = await getNewsList();

    return <NewsList news={news} />;
}
