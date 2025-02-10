import ContactForm from "../sections/contact/ContactForm";
import Notes from '../sections/contact/Notes';

const Contact = () => {
  return (
    <div className="relative py-12">
      <div className="colflex-center gap-y-8 z-4">
        <ContactForm />
        <Notes />
      </div>
    </div>
  );
}

export default Contact;
