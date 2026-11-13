import ContactForm from "../sections/contact/ContactForm";
import Notes from '../sections/contact/Notes';

const Contact = () => {
    return (
        <div className="colflex-center gap-y-8 z-4 p-8">
            <ContactForm />
            <Notes />
        </div>
    );
}

export default Contact;
