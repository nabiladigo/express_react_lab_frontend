
import { useEffect, useState } from "react";

 function Contact(props) {
     console.log(props)
    const [contact, setContact] = useState();
    const getContactData = async() =>{
        const response = await fetch(props.URL + "contact");
        console.log(response)
        const data = await response.json();
        setContact(data);
    };
    useEffect(() => getContactData());
    return (
        <div>
            {/* {contact.map((ele, index) =>{ */}
                return(
                     <div>
                            <h1>let's connect</h1>
                            <button></button>
                        </div>
                    )
            {/* //     })
            // } */}
        </div>
    )
};

 export default Contact;