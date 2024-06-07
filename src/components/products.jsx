import pSection from '../pSection.json'
import ImageList from './imageList';

function Products() {

    const resolvedImagesData = pSection.map(image => ({
        ...image,
        src: require(`${image.src}`).default
    }));
    return (
        <div className="mx-24 my-24">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-semibold">Our Products</h2>
                <button className="text-2xl font-semibold">Explore All</button>
            </div>
            <ImageList images={resolvedImagesData} />
            {/* <div className="flex justify-between items-center">
                <div>
                    <img className="rounded-lg" src="" alt="" />
                    <h3></h3>
                </div>
            </div> */}
        </div>
    );
}

export default Products;