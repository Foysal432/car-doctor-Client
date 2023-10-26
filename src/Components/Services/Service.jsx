
import {GrFormNext} from "react-icons/gr";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  
    const {_id,img,price,title}=service
    return (
        <div>
            <div className="card h-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img  src= {img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="flex items-center justify-between text-orange-600">
                        <p className="text-xl ">Price: ${price}</p>
                       <Link to={`/checkout/${_id}`}>
                       <GrFormNext className="ml-10 text-orange-600 text-2xl"></GrFormNext>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;