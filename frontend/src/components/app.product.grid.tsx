'use client'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { mutate } from "swr";
import Link from "next/link";

interface IProps {
    products: IProduct[]
}

const AppProductGrid = (props: IProps) => {
    const { products } = props

    const handleDelete = (id) => {
        if (confirm(`Do you want to delete this product (id = ${id})`)) {
            fetch(`http://localhost:3001/api/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },

            }).then(res => res.json())
                .then(res => {
                    if (res) {
                        //toast.success("Delete blog succeed !");
                        mutate("http://localhost:3001/api/products")
                    }
                });
        }
    }

    return (
        <>
            <div
                className='mb-3'
                style={{display: "flex", justifyContent: "space-between"}}>
                <h3>Products</h3>
                <Link
                    className='btn btn-secondary'
                    href={'/admin/product/add'}>Add New</Link>
            </div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>SKU</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Created at</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, i) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.sku}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.created_at}</td>
                            <td>
                                <Link
                                    className='btn btn-primary'
                                    href={`/admin/product/${product.id}`}>View</Link>
                                <Button
                                    variant="danger"
                                    className='mx-3'
                                    onClick={() => {handleDelete(product.id)}}
                                >Delete</Button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </>
    );
}

export default AppProductGrid;