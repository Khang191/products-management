async function getData(id: number) {
    'use server'
    const res = await fetch(`http://localhost:3001/api/products/${id}`, { cache: "no-store" })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

async function ProductDetailSSR({ params }: { params: { id: number } }){
    const data = await getData(params.id)
    console.log("check data >>>>>", data)

    return (
        <>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Sku:</strong> {data.sku}</p>
            <p><strong>Price:</strong> {data.price}</p>
            <p><strong>Description:</strong> {data.description}</p>
            <p><img alt={data.name} src={data.image}/></p>
        </>
    )
}

export default ProductDetailSSR;