"use server";

import { ContactStateType } from "@/app/_libs/contactStateType";

function validateEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}

export async function createContactData(_prevState: ContactStateType, formData: FormData) {
    const rawFormData = {
        lastName: formData.get("lastName") as string,
        firstName: formData.get("firstName") as string,
        company: formData.get("company") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
    };

    if (!rawFormData.lastName) {
        return {
            status: "error",
            message: "性を入力してください",
        };
    }

    if (!rawFormData.firstName) {
        return {
            status: "error",
            message: "名を入力してください",
        };
    }

    if (!rawFormData.company) {
        return {
            status: "error",
            message: "会社名を入力してください",
        };
    }

    if (!rawFormData.email) {
        return {
            status: "error",
            message: "メールアドレスを入力してください",
        };
    }

    if (!validateEmail(rawFormData.email)) {
        return {
            status: "error",
            message: "メールアドレスの形式が誤っています",
        };
    }

    if (!rawFormData.message) {
        return {
            status: "error",
            message: "メッセージを入力してください",
        };
    }

    const result = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fields: [
                { objectTypeId: "0-1", name: "lastName", value: rawFormData.lastName },
                { objectTypeId: "0-1", name: "firstName", value: rawFormData.firstName },
                { objectTypeId: "0-1", name: "company", value: rawFormData.company },
                { objectTypeId: "0-1", name: "email", value: rawFormData.email },
                { objectTypeId: "0-1", name: "message", value: rawFormData.message },
            ],
        }),
    });

    try {
        await result.json();
    } catch (e) {
        console.error(e);

        return {
            status: "error",
            message: "お問い合わせに失敗しました",
        };
    }

    return {
        status: "success",
        message: "OK",
    };
}
