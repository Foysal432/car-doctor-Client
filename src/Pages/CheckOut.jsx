import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const loadedData = useLoaderData()
    const { title, _id } = loadedData
               return (
                   
                        <form className="card-body">
                         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                         <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            {/* from 2 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                         </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary btn-block">Order Now</button>
                            </div>
                        </form>
                    
          
    );
};

export default CheckOut;