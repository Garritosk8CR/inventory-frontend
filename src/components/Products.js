
import {Wrapper} from './Wrapper.js';
import { Link } from "react-router-dom";

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

    const del = id => {
        fetch(`http://localhost:8002/products/${id}`, {
            method: 'DELETE'
        }).then(() => {
            setProducts(products.filter(product => product.id !== id));
        })

    return (
        <Wrapper>
            <div className="pt-3 pb-2 mb-3 border-bottom">
                <Link to={`/create`} className="btn btn-sm btn-outline-secondary">Add</Link>
            </div>
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
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <a href="#" class="btn btn-sm btn-outline-secondary"
                                        onClick={(e) => del(product.id)}>
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