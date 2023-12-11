import front_end from '../assets/front-end.jpg'
import back_end from '../assets/back-end.jpg'

const Services = () => {
  return (
    <div className="mb-8">
      <div className="text-center mb-4">
        <h3 className="text-red-500">SERVICES I OFFER</h3>
        <h2 className="font-extrabold text-3xl">What Can I Do</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex gap-16 flex-col lg:flex-row">
          <div data-aos="fade-up" className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={front_end}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Front End Web Application</h2>
              <p className='text-base'>Build client-side applications using React, Tailwind CSS/Bootstrap, and Firebase. Can make single page application using React Router.</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={back_end}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Full Stack Web Application</h2>
              <p className='text-base'>Build both client-side and server-side to make an full stack applications using React, Tailwind CSS/Bootstrap, Firebase, Node JS, Express JS, and MongoDB.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
