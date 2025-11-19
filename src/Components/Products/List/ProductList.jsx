import { useGetProductsQuery } from "../../../services/APIQuery/createProductApi";

export default function ProductList() {

    const { data, error, isLoading } = useGetProductsQuery();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error occurred: {error.toString()}</div>
    }

    return (
        <div>
            {data.map((product) => (
                <div key={product.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    )
}