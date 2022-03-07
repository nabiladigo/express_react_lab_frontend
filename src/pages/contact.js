
import { useEffect, useState } from "react";

 function Contact(props) {
     console.log(props)
    const [contact, setContact] = useState(null);
    const getContactData = async() =>{
        const response = await fetch(props.URL + "about");
        console.log(response)
        const data = await response.json();
        setContact(data);
        console.log(data)
    };
    useEffect(() => getContactData(), []);

    const loaded = () =>{
        // return contact.map((contact) =>
        (
            <div>
                <h1>let's connect</h1>
                {/* <a href={contact.email}> */}
                    <button>Email</button>
                {/* </a> */}
            </div>
        
        );
    };

    return contact ? loaded() : <h1>Loading...</h1>;
  }
 export default Contact;