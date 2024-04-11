interface IProps {
    product: IProduct;
}

function AppProductDetail(props: IProps) {

    const { product } = props;

    return (
        <>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Sku:</strong> {product.sku}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><img alt={product.name} src={product.image}/></p>
        </>
    );
}

export default AppProductDetail;