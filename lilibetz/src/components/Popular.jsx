import data_products from './assets/data';
import Item from './Item';

const Popular = () => {
    return (
        <div>
            <header className="text-center mb-8">
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Featured Products</h2>
            </header>
            <div className="mx-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {data_products.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
                })}
            </div>
        </div>
    )
}

export default Popular