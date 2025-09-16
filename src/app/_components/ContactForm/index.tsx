import styles from "./index.module.css";

export default function ContactForm() {
    return (
        <form className={styles.form}>
            <div className={styles.horizontal}>
                <div className={styles.item}>
                    <label
                        className={styles.label}
                        htmlFor="lastName"
                    >
                        性
                    </label>
                    <input
                        className={styles.textField}
                        type="text"
                        id="lastName"
                        name="lastName"
                    />
                </div>
                <div className={styles.item}>
                    <label
                        className={styles.label}
                        htmlFor="firstName"
                    >
                        名
                    </label>
                    <input
                        className={styles.textField}
                        type="text"
                        id="firstName"
                        name="firstName"
                    />
                </div>
            </div>

            <div className={styles.item}>
                <label
                    className={styles.label}
                    htmlFor="company"
                >
                    会社名
                </label>
                <input
                    className={styles.textField}
                    type="text"
                    id="company"
                    name="company"
                />
            </div>

            <div className={styles.item}>
                <label
                    className={styles.label}
                    htmlFor="email"
                >
                    メールアドレス
                </label>
                <input
                    className={styles.textField}
                    type="text"
                    id="email"
                    name="email"
                />
            </div>

            <div className={styles.item}>
                <label
                    className={styles.label}
                    htmlFor="message"
                >
                    メッセージ
                </label>
                <textarea
                    className={styles.textArea}
                    id="message"
                    name="message"
                />
            </div>

            <div className={styles.actions}>
                <input
                    type="submit"
                    value="送信する"
                    className={styles.button}
                />
            </div>
        </form>
    );
}
