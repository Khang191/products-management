import AppProductDetail from "@/components/app.product.detail";
import {number} from "prop-types";

export async function generateStaticParams() {
    const products = await fetch('http://localhost:3001/api/products/', {cache: "no-store"})
        .then((res) => res.json())
    const rs = []

    products.map((product, i) => {
        if (i < 2) {
            rs.push({id: product.id.toString()})
        }
    })

    return rs
}

async function getData(id: number) {
    const res = await fetch(`http://localhost:3001/api/products/${id}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


async function ProductDetailSSG({params}: { params: { id: string } }) {
    const {id} = params

    const data = await getData(Number(id))
    return (
        <>
            <h2> This string not change when reload page</h2>
            <AppProductDetail product={data}/>
        </>

    )
}

export default ProductDetailSSG