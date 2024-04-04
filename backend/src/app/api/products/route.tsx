import {connectToDb} from "@/db/connection";

export async function GET(request: Request) {
    const db = await connectToDb()
    try {
        const [row] = await db.query("SELECT * FROM products")
        return Response.json(row)
    } catch (e) {
        console.log(e)
    }
}