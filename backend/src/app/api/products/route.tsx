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


export async function POST(
    request: Request
) {
    const db = await connectToDb()
    const product: IProduct = await request.json()
    const values = [[
        product.sku,
        product.name,
        product.description,
        product.features,
        product.price,
        product.keywords,
        product.url,
        product.category,
        product.image
    ]]
    let sql = "INSERT INTO products (sku, name, description, features, price, keywords, url, category, image) VALUES ?";

    try {
        const [rs] = await db.query(
            sql,
            [values]
        )
        return Response.json(rs)
    } catch (e) {
        console.log(e)
        return Response.json({err: "error"})
    }
}