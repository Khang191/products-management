import {connectToDb} from "@/db/connection";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const db = await connectToDb()
    const sql = "SELECT * FROM products WHERE id = ?";
    const id = params.id

    try {
        const [row] = await db.query(
            sql,
            [id]
        )
        return Response.json(row[0])
    } catch (e) {
        console.log(e)
        Response.json({err: "error"})
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const db = await connectToDb()
    const sql = "DELETE FROM products WHERE id = ?";
    const id = params.id

    try {
        const [rs] = await db.query(
            sql,
            [id]
        )
        return Response.json(rs)
    } catch (e) {
        console.log(e)
        Response.json({err: "error"})
    }
}