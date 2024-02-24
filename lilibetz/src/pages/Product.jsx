import { useParams } from 'react-router-dom'
import all_products from '../components/assets/all_products'
import Breadcrumb from '../components/Breadcrumb';
import ProductDisplay from '../components/ProductDisplay';

export default function Product() {
    const { productId} = useParams();

    const product = all_products.find((e)=> e.id === Number(productId));
    return (
        <div>
            <Breadcrumb product={product}/>
            <ProductDisplay product={product}/>
        </div>
    )
}