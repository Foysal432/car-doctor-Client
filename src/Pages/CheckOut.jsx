import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const loadedData = useLoaderData()
    const { title, _id,price,img } = loadedData
    const {user} = useContext(AuthContext)
    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        // const date =form.date.value;
        const email =user?.email;
        const booking ={
            customerName:name,
            img,
            email,
            // date,
            service: _id,
            price: price,
            title
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
            'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId) {
                Swal.fire(
                    'Good job!',
                    'Your Booking Success!',
                    'success'
                  )
            }
        })
    }
               return (
                   <div>
                    <h1 className="text-center text-3xl">Book Service : {title}</h1>
                        <form onSubmit={handleBookService} className="card-body">
                         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                         <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date"  className="input input-bordered" />
                            </div>
                            {/* from 2 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Amount</span>
                                </label>
                                <input type="text" defaultValue={'$'+ price} className="input input-bordered" required />
                            </div>
                         </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary btn-block">Order Now</button>
                            </div>
                        </form>
                        </div>
          
    );
};

export default CheckOut;