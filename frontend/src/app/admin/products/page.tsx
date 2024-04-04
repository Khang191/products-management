import AppProductGrid from "@/components/app.product.grid";

async function getData() {
    const res = await fetch('http://localhost:3001/api/products')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function ProductGrid() {
    const data = await getData()
    return <AppProductGrid
        products ={data?.sort((a: any, b: any) => b.id - a.id) ?? []}
    />
}