import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xn7ytyq', 'template_z69f6ao', form.current, 'bHr9OKm6dCyKPFpQL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div>
           <section className="py-6 bg-gray-800 text-gray-50">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Rajshahi, Rangladesh</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>01758343470</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>mahfuzar175@gmail.com</span>
				</p>
			</div>
		</div>
		<form  ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" name="user_name" placeholder="Name" className="block w-full text-black rounded-md input shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" name="user_email" placeholder="Email" className="block w-full input text-black  rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" name="message" className="block w-full rounded-md focus:ring focus:ri focus:ri text-black "></textarea>
			</label>
			<input type="submit"  className="w-full btn btn-secondary"></input>
		</form>
	</div>
</section>
        </div>
    );
};

export default Contact;