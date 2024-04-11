export const metadata = {
    title: 'Product detail',
    description: '',
}

export default function ProductAddLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return <section style={{
        margin: "30px 0"
    }}>{children}</section>
}
