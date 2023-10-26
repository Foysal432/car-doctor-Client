import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Booking from "./Booking";
import Swal from "sweetalert2";
import { data } from "autoprefixer";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are You Sure You Want to Delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Good job!',
                            'You deleted success!',
                            'success'
                        )
                    }

                    const remaining =bookings.filter(booking =>booking._id !== id)
                   setBookings(remaining)
                })
        }
    }

const handleConfirm = id =>{
    fetch(`http://localhost:5000/bookings/${id}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({status:'confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if (data.modifiedCount > 0) {


const remaining =bookings.filter(booking => booking._id !== id)
const updated =bookings.find(booking=>booking._id === id)
updated.status='confirm'
const newBookings =[updated, ...remaining];
setBookings(newBookings)
            Swal.fire(
                'Good job!',
                'Updated',
                'success'
              )
        }
    })
}

    return (
        <div>
            <h1 className="text-center text-4xl">Your Booking:{bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>E-Mail</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking => <Booking handleConfirm ={handleConfirm } handleDelete={handleDelete} key={booking._id} booking={booking} ></Booking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;