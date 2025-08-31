import Image from "next/image";
import styles from "./index.module.css";

import { News } from "@/app/_libs/microcms";
import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";

export default function NewsList({ news }: News[]) {
    return news.length ? (
        <ul>
            {news.map((article) => (
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
                            <dt className={styles.title}>{article.title}</dt>
                            <dd className={styles.meta}>
                                <Category category={article.category} />
                                <Date date={article.publishedAt ?? article.publishedAt} />
                            </dd>
                        </dl>
                    </div>
                </li>
            ))}
        </ul>
    ) : (
        <p>記事がありません。</p>
    );
}
