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

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const db = await connectToDb()
    const product: IProduct = await request.json()
    let sql = "UPDATE products SET ";
    let fields = []
    let where = ` WHERE id ='${params.id}' `

    if (product.name) {
        fields.push(`name='${product.name}'`)
    }
    if (product.description) {
        fields.push(`description='${product.description}'`)
    }
    if (product.features) {
        fields.push(`features='${product.features}'`)
    }
    if (product.price) {
        fields.push(`price=${product.price}`)
    }
    if (product.keywords) {
        fields.push(`keywords='${product.keywords}'`)
    }
    if (product.url) {
        fields.push(`url='${product.url}'`)
    }
    if (product.category) {
        fields.push(`category='${product.category}'`)
    }
    if (product.image) {
        fields.push(`image='${product.image}'`)
    }
    sql += fields.join() + where

    try {
        const [rs] = await db.query(
            sql
        )
        return Response.json(rs)
    } catch (e) {
        console.log(e)
        return Response.json({err: "error"})
    }
}