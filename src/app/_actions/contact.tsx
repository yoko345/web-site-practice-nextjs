"use server";

function validateEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}

export async function createContactData(_prevState: any, formData: FormData) {
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

    return {
        status: "success",
        message: "OK",
    };
}
