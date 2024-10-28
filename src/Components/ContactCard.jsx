import { FaPhoneSquareAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import ContactForm from "./ContactForm";

const ContactCard = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around gap-6 p-4">
      

      <div className="basis-2/3 bg-white p-4 rounded-md shadow-md justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactCard;
