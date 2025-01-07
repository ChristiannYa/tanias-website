import ContactForm from "../sections/contact/ContactForm";
import Notes from "../sections/contact/Notes";
import Auroras from "../styles/Auroras";

const Contact = () => {
  return (
    <div className="relative py-12">
      <Auroras />
      <div className="colflex-center gap-y-8 z-4">
        <ContactForm />
        <Notes/>
      </div>
    </div>
  )
}

export default Contact;
