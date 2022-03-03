
import { useEffect, useState } from "react";

 function Contact(props) {
    const [contact, setContact] = useState();
    const getContactData = async() =>{
        const response = await fetch(props.URL + "about");
        console.log(response)
        const data = await response.json();
        setContact(data);
    };
    useEffect(() => getContactData());
    const loaded = () =>(
        <div>
            <h1>lets connect</h1>
            <button></button>
        </div>
    );
    return contact ? loaded() : <h1>Loading...</h1>;

 };

 export default Contact;