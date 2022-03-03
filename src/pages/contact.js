
import { useEffect, useState } from "react";

 function Contact(props) {
    const [contact, setContact] = useState();
    const getContactData = async() =>{
        const response = await fetch(props.URL, + "contact");
        const data = await response.json();
        setContact(data);
    };
    useEffect(() => getContactData());
    const loaded = () =>(

        <h1>{contact.email}</h1>
    );
    return contact ? loaded() : <h1>Loading...</h1>;

 };

 export default Contact;