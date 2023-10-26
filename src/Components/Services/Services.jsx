import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services,setServices] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    console.log(services);
    return (
        <div>
           <div className="text-center">
           <h1 className="text-2xl font-bold">Our Service Area</h1>
            <p className="my-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable</p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                services.map(service=><Service service={service} key={service._id}></Service>)
            }
           </div>
        </div>
    );
};

export default Services;