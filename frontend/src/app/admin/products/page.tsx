'use client'
import AppProductGrid from "@/components/app.product.grid";
import useSWR from "swr";

const Product = () => {
    const fetcher = (url: string) => fetch(url)
        .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        "http://localhost:3001/api/products",
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    if (isLoading) {
        return <div>loading...</div>
    }

    return (
        <AppProductGrid
            products = {data?.sort((a: any, b: any) => b.id - a.id) ?? []}
        />
    )
}

export default Product;