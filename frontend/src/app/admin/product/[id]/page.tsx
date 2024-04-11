'use client'

import AppProductForm from "@/components/app.product.form";
import useSWR from "swr";
import {useState} from "react";

const ProductDetail = ({ params }: { params: { id: string } }) => {
    const fetcher = (url: string) => fetch(url)
        .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        `http://localhost:3001/api/products/${params.id}`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )

    if (isLoading) {
        return <div>loading...</div>
    }

    return (
        <AppProductForm product={data}/>
    )
}

export default ProductDetail;