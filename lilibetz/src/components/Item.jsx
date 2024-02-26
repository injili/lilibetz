import { Link } from "react-router-dom"
const Item = (props) => {
    return (
        <div className="group block overflow-hidden">
            <Link to={`/product/${props.id}`} ><img
                src={props.image}
                alt=""
                className="h-72 rounded-lg w-full object-cover transition duration-500 group-hover:scale-105"
            /></Link>

            <div className="relative pt-4">
                <h3
                    className="group-hover:text-amber-500"
                >
                    <strong>
                        {props.name}
                    </strong>
                </h3>
                <p className="pt-2">
                    <span className="tracking-wider"> Ksh. {props.new_price}.00</span>
                </p>
            </div>
        </div>
    )
}

export default Item