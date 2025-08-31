import Image from "next/image";
import styles from "./page.module.css";

type News = {
    id: string;
    title: string;
    category: {
        name: string;
    };
    publishedAt: string;
    createdAt: string;
};

const data: { contents: News[] } = {
    contents: [
        {
            id: "1",
            title: "渋谷にオフィスを移転しました",
            category: {
                name: "更新情報",
            },
            publishedAt: "2023/05/19",
            createdAt: "2023/05/19",
        },
        {
            id: "2",
            title: "当社CEOが業界リーダーTOP30に選出されました",
            category: {
                name: "更新情報",
            },
            publishedAt: "2023/06/19",
            createdAt: "2023/06/19",
        },
        {
            id: "3",
            title: "テストの記事です",
            category: {
                name: "更新情報",
            },
            publishedAt: "2023/04/19",
            createdAt: "2023/04/19",
        },
    ],
};

export default function Home() {
    const compnayName = "テスト株式会社";
    const sliceData = data.contents.slice(0, 2);

    return (
        <>
            <section className={styles.top}>
                <div>
                    <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
                    <h2 className={styles.description}>会社名：{compnayName}</h2>
                    <p className={styles.description}>私達は市場をリードしているグローバルテックカンパニーです！</p>
                </div>
                <Image
                    className={styles.bgimg}
                    src="/img-mv.jpg"
                    alt=""
                    width={4000}
                    height={1200}
                />
            </section>
            <section className={styles.news}>
                <h2 className={styles.news_title}>News</h2>
                <ul>
                    {sliceData.map((article) => {
                        return (
                            <li
                                key={article.id}
                                className={styles.list}
                            >
                                <div className={styles.link}>
                                    <Image
                                        className={styles.image}
                                        src="/no-image.png"
                                        alt="No Image"
                                        width={1200}
                                        height={630}
                                    />
                                    <dl className={styles.content}>
                                        <dt className={styles.news_item_title}>{article.title}</dt>
                                        <dd className={styles.meta}>
                                            <span className={styles.tag}>{article.category.name}</span>
                                            <span className={styles.date}>
                                                <Image
                                                    src="/clock.svg"
                                                    alt=""
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                                {article.publishedAt}
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}
