'use client'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

interface IProps {
    products: IProduct[]
}

const AppProductGrid = (props: IProps) => {
    const { products } = props
    console.log(products)
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>ID</th>
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
                        <td>{i}</td>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.created_at}</td>
                        <td>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </Table>
    );
}

export default AppProductGrid;