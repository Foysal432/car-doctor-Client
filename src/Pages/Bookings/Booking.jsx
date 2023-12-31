import Swal from "sweetalert2";

const Booking = ({ booking,handleDelete,handleConfirm }) => {
    const {_id,customerName, email, price, title, img,status } = booking;

  
    return (

        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>{email}</td>
            <td>{price}</td>
            <th>
               {
                status ==='confirm'? <span className="font-bold text-primary">Confirm</span> : <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">please Confirm</button>
               }
            </th>
        </tr>
    );
};

export default Booking;