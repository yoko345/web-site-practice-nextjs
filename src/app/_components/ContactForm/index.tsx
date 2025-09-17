"use client";

import { useFormState } from "react-dom";
import styles from "./index.module.css";
import { createContactData } from "@/app/_actions/contact";

const initialState = {
    status: "",
    message: "",
};

export default function ContactForm() {
    // useFormStateは第一引数にServerActionsを、第二引数にServerActionsから受け取る初期値を指定できる
    const [state, formAction] = useFormState(createContactData, initialState);

    if (state.status === "success") {
        return (
            <p className={styles.success}>
                お問い合わせいただき、ありがとうございます。
                <br />
                お返事まで今しばらくお待ちください。
            </p>
        );
    }

    return (
        <form
            className={styles.form}
            action={formAction}
        >
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
                {state.status === "error" && <p className={styles.error}>{state.message}</p>}
                <input
                    type="submit"
                    value="送信する"
                    className={styles.button}
                />
            </div>
        </form>
    );
}
