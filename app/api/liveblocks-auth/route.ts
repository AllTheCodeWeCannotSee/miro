
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { auth, currentUser } from "@clerk/nextjs";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);


const liveblocks = new Liveblocks({
    secret: "sk_dev_Q7dDkp31JzRfypqrRERM-b7WAYDbiZUR8Xkrnq_1GLfS1V_Jxv-vfWTDVewG84kt",
});

export async function POST(request: Request) {
    // Get the current user from your database
    const user = await currentUser();
    const authorization = await auth();

    if (!user || !authorization) {
        return new Response("Unauthorized", { status: 403 });
    }

    const { room } = await request.json();
    const board = await convex.query(api.board.get, { id: room });

    if (board?.orgId !== authorization.orgId) {
        return new Response("Unauthorized", { status: 401 });
    }

    const userInfo = {
        name: user.firstName || "Teammate",
        picture: user.imageUrl,
    };

    const session = liveblocks.prepareSession(
        user.id,
        { userInfo }
    );

    if (room) {
        session.allow(room, session.FULL_ACCESS);
    }

    const { status, body } = await session.authorize();
    return new Response(body, { status });
}