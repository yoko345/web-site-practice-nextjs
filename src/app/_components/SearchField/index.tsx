"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import styles from "./index.module.css";

function SearchFieldComponent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const keyWordElement = e.currentTarget.elements.namedItem("keyWord");

        if (keyWordElement instanceof HTMLInputElement) {
            const params = new URLSearchParams();
            params.set("keyWord", keyWordElement.value.trim());
            router.push(`/news/search?${params.toString()}`);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}
        >
            <label className={styles.search}>
                <Image
                    src="/search.svg"
                    alt="検索"
                    width={16}
                    height={16}
                    loading="eager"
                />
                <input
                    type="text"
                    name="keyWord"
                    defaultValue={searchParams.get("keyWord") ?? undefined}
                    placeholder="キーワードを入力してください"
                    className={styles.searchInput}
                />
            </label>
        </form>
    );
}

export default function SearchField() {
    return (
        <Suspense>
            <SearchFieldComponent />
        </Suspense>
    );
}
