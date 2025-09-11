import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems";
import "../styles/Contact.scss";

function Contact() {
  const contactItem = menuItems.find((item) => item.id === "contact");

  return (
    <div className="contact">
      <CardHead item={contactItem}/>
      <p>Contact</p>
    </div>
  );
}

export default Contact;
