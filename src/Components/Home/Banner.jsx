
const Banner = () => {
    return (
        <div className="carousel w-full h-96">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src="https://i.ibb.co/pnDpvMn/1.jpg" className="w-full rounded-xl" />
          <div className="absolute top-0 h-full rounded-xl left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white mx-9 my-5">
            <h1 className="text-4xl font-bold w-1/3">Affordable Price For Car Servicing</h1>
            <p className="w-4/5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          </div><br />
          <div className="mx-9"> 
          <button className="btn btn-secondary mr-4">Secondary</button>
          <button className="btn btn-outline btn-secondary">Secondary</button>
          </div>
          </div>
         
          {/* btn */}
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/ct4gtbd/2.jpg" className="w-full" />
          <div className="absolute top-0 h-full left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white mx-9 my-5">
            <h1 className="text-4xl font-bold w-1/3">Affordable Price For Car Servicing</h1>
            <p className="w-4/5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          </div><br />
          <div className="mx-9"> 
          <button className="btn btn-secondary mr-4">Secondary</button>
          <button className="btn btn-outline btn-secondary">Secondary</button>
          </div>
          </div>
         
          {/* btn */}
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/GF9H998/3.jpg" className="w-full" />
          <div className="absolute top-0 h-full left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white mx-9 my-5">
            <h1 className="text-4xl font-bold w-1/3">Affordable Price For Car Servicing</h1>
            <p className="w-4/5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          </div><br />
          <div className="mx-9"> 
          <button className="btn btn-secondary mr-4">Secondary</button>
          <button className="btn btn-outline btn-secondary">Secondary</button>
          </div>
          </div>
         
          {/* btn */}
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>  
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/VS2DxmT/4.jpg" className="w-full" />
          <div className="absolute top-0 h-full left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white mx-9 my-5">
            <h1 className="text-4xl font-bold w-1/3">Affordable Price For Car Servicing</h1>
            <p className="w-4/5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          </div><br />
          <div className="mx-9"> 
          <button className="btn btn-secondary mr-4">Secondary</button>
          <button className="btn btn-outline btn-secondary">Secondary</button>
          </div>
          </div>
         
          {/* btn */}
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
    );
};

export default Banner;