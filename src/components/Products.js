
import {Wrapper} from './Wrapper.js';
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
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1,001</td>
                            <td>random</td>
                            <td>data</td>
                            <td>placeholder</td>
                            <td>text</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Wrapper>
    )
}