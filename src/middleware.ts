/*
【middleware は src の直下にしないと通らないので注意！！】

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log(`middleware: ${request.url}`);

    return NextResponse.next();
}
*/

import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middleware = createNextAuthMiddleware();

// どのリクエストに対してmiddlewareの処理を実行するのかを指定できる
export const config = {
    matcher: ["/(.*)"],
};
