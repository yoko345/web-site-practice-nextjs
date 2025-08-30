import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    const compnayName = "テスト株式会社";

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
        </>
    );
}
