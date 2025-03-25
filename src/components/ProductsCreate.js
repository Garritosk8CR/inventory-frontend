
import {Wrapper} from './Wrapper.js';

export const ProductsCreate = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    return <Wrapper>
        <form className="mt-3">
            <div classname="form-floating pb-3">
                <input type="text" name="name" className="form-control" placeholder="Product Name"
                    onChange={(e) => setName(e.target.value)} />
                <label for="name">Product Name</label>
            </div>
            <div classname="form-floating pb-3">
                <input type="number" name="price" className="form-control" placeholder="Product Price" 
                    onChange={(e) => setPrice(e.target.value)}/>
                <label for="price">Product Price</label>
            </div>
            <div classname="form-floating pb-3">
                <input type="text" name="quantity" className="form-control" placeholder="Product Quantity" 
                    onChange={(e) => setQuantity(e.target.value)}/>
                <label for="quantity">Product Quantity</label>
            </div>

            <button type="submit" className="w-100 btn btn-lg btn-primary">Create Product</button>
        </form>
    </Wrapper>
}