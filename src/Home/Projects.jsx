const Projects = () => {
  return (
    <div className="p-12">
      <h2 className="text-center font-extrabold text-4xl underline mb-4">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* project 1 */}
        <div className="flex flex-col h-full">
          <div className="card bg-base-100 shadow-xl flex-grow">
            <figure>
              <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    src="https://i.ibb.co/wzX0Gtb/Fauget-Travel-Home.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src="https://i.ibb.co/sRHKvjP/Fauget-Travel-Home.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img
                    src="https://i.ibb.co/ZmgznPL/Fauget-Travel-Story-Details.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                  <img
                    src="https://i.ibb.co/ZYq6FkZ/Fauget-Travel-Login.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title font-extrabold text-2xl">Fauget Travel</h2>
              <p>
                Description: Fauget Travel is an online platform that offers
                comprehensive information and resources for travelers seeking
                guidance on popular destinations. The website supports three
                roles: Normal User/Tourist, Tour Guide, and Admin.
              </p>
              <p>
                <p className="font-semibold">Technologies Used: </p>
                <li className="text-gray-500">Frontend: JavaScript, React.js, Tailwind CSS</li>
                <li className="text-gray-500">Backend: Node.js, Express.js Database: MongoDB</li> 
                <li className="text-gray-500">Authentication:
                Firebase Authentication with JWT set at cookies</li>
                <p className="font-semibold"><span className="text-gray-500">Demo Admin
                email:</span> admin@gmail.com</p>
                <p className="font-semibold"><span className="text-gray-500">Demo Admin password:</span> Admin@123456</p>  
              </p>
              <div className="card-actions mt-auto flex flex-col md:flex-row gap-1">
              <a
                    href="https://fauget-travel.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                    <button className="btn btn-outline btn-secondary btn-sm">Live Demo</button>
                    </div>
                  </a>
              <a
                    href="https://github.com/mahfuzar175/fauget-travel-client-side"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                    <button className="btn btn-outline btn-secondary btn-sm">GitHub Client Side Link</button>
                    </div>
                  </a>
              <a
                    href="https://github.com/mahfuzar175/fauget-travel-server-side"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                    <button className="btn btn-outline btn-secondary btn-sm">GitHub Server Side Link</button>
                    </div>
                  </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 2 */}
        <div className="flex flex-col h-full">
          <div className="card bg-base-100 shadow-xl flex-grow">
            <figure>
              <div className="carousel w-full">
                <div id="slide5" className="carousel-item relative w-full">
                  <img
                    src="https://i.ibb.co/MRFzbnQ/Foodily.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide8" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide6" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                  <img
                    src="https://i.ibb.co/sWdV12q/Foodily-1.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide7" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide7" className="carousel-item relative w-full">
                  <img
                    src="https://i.ibb.co/2kzBXw7/Foodily-2.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide8" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide8" className="carousel-item relative w-full">
                  <img
                    src="https://i.ibb.co/2gLz5XC/Foodily-3.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide7" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide5" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title font-extrabold text-2xl">Foodily Website - E-Commerce Platform</h2>
              <p>
              Description: Foodily is a user-friendly e-commerce platform that allows users to explore a variety of food products, manage their shopping cart, and enjoy a seamless shopping experience. This repository contains the codebase for the Foodily website.
              </p>
              <p>
                <p className="font-semibold">Technologies Used: </p>
                <li className="text-gray-500">Frontend: JavaScript, React.js, Tailwind CSS</li>
                <li className="text-gray-500">Backend: Node.js, Express.js Database: MongoDB</li> 
                <li className="text-gray-500">Authentication:
                Firebase Authentication with JWT set at cookies</li>
                 
              </p>
              
              <div className="card-actions mt-auto flex flex-col md:flex-row gap-1">
              <a
                    href="https://foodily-website.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                    <button className="btn btn-outline btn-secondary btn-sm">Live Demo</button>
                    </div>
                  </a>
              <a
                    href="https://github.com/mahfuzar175/brandshop-client-side"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                    <button className="btn btn-outline btn-secondary btn-sm">GitHub Client Side Link</button>
                    </div>
                  </a>
              <a
                    href="https://github.com/mahfuzar175/brandshop-server-side"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-actions">
                    <button className="btn btn-outline btn-secondary btn-sm">GitHub Server Side Link</button>
                    </div>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
