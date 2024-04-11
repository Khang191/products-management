'use client'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import useSWR from "swr";
import { useSWRConfig } from 'swr';
import {useState, useEffect} from "react";
import {useRouter} from 'next/navigation'



interface IProps {
    product: IProduct;
}

const AppProductForm = (props: IProps) => {
    const router = useRouter()

    const { product } = props;
    const [id, setId] = useState<number|any>("")
    const [sku, setSku] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [features, setFeatures] = useState<string>("")
    const [price, setPrice] = useState<any>(0)
    const [keywords, setKeywords] = useState<string>("")
    const [url, setUrl] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [image, setImage] = useState<string>("")

    useEffect(() => {
        if (product && product.id) {
            setId(product.id);
            setSku(product.sku);
            setName(product.name);
            setDescription(product.description);
            setFeatures(product.features);
            setPrice(product.price);
            setKeywords(product.keywords);
            setUrl(product.url);
            setCategory(product.category);
            setImage(product.image);
        }
    }, [product])

    const { mutate } = useSWRConfig();

    const handleSubmit = () => {

        // Save
        let api = '';
        let method = '';
        if (id) {
            api = `http://localhost:3001/api/products/${id}`
            method = "PATCH"
        } else {
            api = `http://localhost:3001/api/products`
            method = "POST"
        }

        fetch(api, {
            method: method,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sku,
                name,
                description,
                features,
                price,
                keywords,
                url,
                category,
                image
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log("check data response>>>", res)
                if (res) {
                    //toast.success("Delete blog succeed !");

                    if (id) {
                        // Update the cache with the mutated Product
                        mutate(`http://localhost:3001/api/products/${id}`,
                            undefined,
                            { revalidate: true }
                        )
                    }
                    mutate("http://localhost:3001/api/products",
                        undefined,
                        { revalidate: true })
                    router.push('/admin/products')
                }
            });
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicId">
                <Form.Label>Sku</Form.Label>
                <Form.Control type="text" placeholder="Enter Sku"
                              onChange={(e) => setSku(e.target.value)}
                              value={sku}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name"
                              onChange={(e) => setName(e.target.value)}
                              value={name}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="Description"
                    style={{height: '100px'}}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFeature">
                <Form.Label>Features</Form.Label>
                <Form.Control
                    as="textarea"
                    onChange={(e) => setFeatures(e.target.value)}
                    value={features}
                    placeholder="Features"
                    style={{height: '100px'}}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    value={price}
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter Price"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicKeywords">
                <Form.Label>Keywords</Form.Label>
                <Form.Control
                    as="textarea"
                    value={keywords}
                    placeholder="Keywords"
                    onChange={(e) => setKeywords(e.target.value)}
                    style={{height: '100px'}}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUrl">
                <Form.Label>Url</Form.Label>
                <Form.Control
                    value={url}
                    type="text"
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter Url"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                    as="textarea"
                    value={category}
                    placeholder="Category"
                    onChange={(e) => setCategory(e.target.value)}
                    style={{height: '100px'}}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Image</Form.Label>
                <Form.Control onChange={(e) => setImage(e.target.value)} value={image} type="text"
                              placeholder="Enter Image Url"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCategory">
                <Form.Label>Preview</Form.Label>
                <Image src={image}/>
            </Form.Group>

            <Button variant="primary" onClick={() => handleSubmit()}>
                Save
            </Button>
        </Form>
    );
}

export default AppProductForm;