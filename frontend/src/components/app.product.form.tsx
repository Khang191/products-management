'use client'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {mutate} from "swr";
import {useState} from "react";

interface IProps {
    product: IProduct
}

const AppProductForm = (props: IProps) => {
    const { product } = props
    const [image , setImage] = useState(product.image)
    const [name , setName] = useState(product.name)
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name"
                              onChange={(e)=>setName(e.target.value)}
                              value={name}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    value={product.description}
                    placeholder="Description"
                    style={{height: '100px'}}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control value={product.price} type="text" placeholder="Enter Price"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicKeywords">
                <Form.Label>Keywords</Form.Label>
                <Form.Control
                    as="textarea"
                    value={product.keywords}
                    placeholder="Keywords"
                    style={{height: '100px'}}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUrl">
                <Form.Label>Url</Form.Label>
                <Form.Control value={product.url} type="text" placeholder="Enter Url"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                    as="textarea"
                    value={product.category}
                    placeholder="Category"
                    style={{height: '100px'}}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Image</Form.Label>
                <Form.Control onChange={(e)=>setImage(e.target.value)} value={image} type="text" placeholder="Enter Image Url"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCategory">
                <Form.Label>Preview</Form.Label>
                <Image src={image} />;
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AppProductForm;