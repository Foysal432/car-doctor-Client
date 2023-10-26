
const About = () => {
    return (
        <div>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 relative">
    <img src="https://i.ibb.co/JkdLG20/person.jpg" className=" rounded-lg shadow-2xl" />
    <img src="https://i.ibb.co/VmqtNWm/parts.jpg" className="w-2/3 absolute top-36 -right-2 rounded-xl" alt=""  />
    </div>
    <div className="w-1/2 ml-4">
        <h1 className="text-xl text-orange-500">About Us</h1>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;