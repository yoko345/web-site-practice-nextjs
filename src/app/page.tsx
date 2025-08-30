import styles from "./page.module.css";

export default function Home() {
    const compnayName = "テスト株式会社";

    return (
        <>
            <h1 className="title">テクノロジーの力で世界を変える</h1>
            <h2 className="description">会社名：{compnayName}</h2>
            <p className="description">私達は市場をリードしているグローバルテックカンパニーです！</p>
        </>
    );
}
