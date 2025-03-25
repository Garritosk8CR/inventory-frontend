
import {Wrapper} from './Wrapper.js';

import React, {useState, useEffect} from'react';
export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // fetch products from API
        (async () => {
            const response = await fetch('http://localhost:8002/products');
            const data = await response.json();
            setProducts(data);
        })()
    }, []);
    return (
        <Wrapper>
            <div class="table-responsive small">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <a href="#" class="btn btn-sm btn-outline-secondary">
                                        Delete
                                    </a>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        </Wrapper>
    )
}