export const metadata = {
    title: 'Product management',
    description: '',
}

export default function AdminProductsLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return <section style={{
        margin: "30px 0"
    }}>{children}</section>
}
