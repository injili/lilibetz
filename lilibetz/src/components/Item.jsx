import { Link } from "react-router-dom"
const Item = (props) => {
    return (
        <div className="group block overflow-hidden">
            <Link to={`/product/${props.id}`} ><img
                src={props.image}
                alt=""
                className="h-72 rounded-lg w-full object-cover transition duration-500 group-hover:scale-105"
            /></Link>

            <div className="relative bg-white pt-3">
                <h3
                    className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                    {props.name}
                </h3>
                <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
                    <span className="tracking-wider text-gray-900"> Ksh. {props.new_price}</span>
                </p>
            </div>
        </div>
    )
}

export default Item