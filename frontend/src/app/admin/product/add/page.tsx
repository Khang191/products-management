'use client'

import AppProductForm from "@/components/app.product.form";
import useSWR from "swr";
import {useState} from "react";

const ProductAdd = ({ params }: { params: { id: string } }) => {
    const data = null
    return (
        <AppProductForm product={data}/>
    )
}

export default ProductAdd;