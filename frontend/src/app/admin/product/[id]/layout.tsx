export const metadata = {
    title: 'Product Detail',
    description: '',
}

export default function ProductDetailLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return <section style={{
        margin: "30px 0"
    }}>{children}</section>
}
