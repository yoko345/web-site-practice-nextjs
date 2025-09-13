import Link from "next/link";
import styles from "./index.module.css";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

type Props = {
    totalCount: number;
    current?: number;
    basePath?: string;
};

export default function Pagination({ totalCount, current = 1, basePath = "/news" }: Props) {
    const pageNumberList = Array.from({ length: Math.ceil(totalCount / NEWS_LIST_LIMIT) }, (_, i) => ++i);

    return (
        <nav>
            <ul className={styles.container}>
                {pageNumberList.map((pageNumber) => (
                    <li
                        className={styles.list}
                        key={pageNumber}
                    >
                        {current !== pageNumber ? (
                            <Link
                                href={`${basePath}/pagination/${pageNumber}`}
                                className={styles.item}
                            >
                                {pageNumber}
                            </Link>
                        ) : (
                            <span className={`${styles.item} ${styles.current}`}>{pageNumber}</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
