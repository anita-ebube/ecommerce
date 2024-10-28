
const ContactForm = () => {
    return (
      <div className="flex justify-center items-center">
        <form action="" className=" flex flex-col gap-3 w-full p-5">
          <div className=" flex gap-3 w-full">
            <input
              type="text"
              placeholder="Your Name"
              className=" bg-text1/10 md:w-1/3 w-full p-2 focus:outline-none text-sm rounded text-text1"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              className=" bg-text1/10 p-2 md:w-1/3 w-full focus:outline-none text-sm rounded text-text1"
            />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              className=" bg-text1/10 p-2 md:w-1/3 w-full focus:outline-none text-sm rounded text-text1"
            />
          </div>
          <div className="">
            <textarea
              name=""
              id=""
              placeholder=" Your Message"
              className=" bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1 w-full h-36"
            />
          </div>
          <div className=" flex justify-end">
            <button width={120} className="bg-secondary2 p-2 text-secondary1">Send Message</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  