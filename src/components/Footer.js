import {useEffect, useState} from "react-router-dom";
function Footer(props){
  const [footer, setFooter]= useState(null);
  const getFooterData = async() =>{
    const response = await fetch(props.URL + "footer");
    const data = await response.json();
    setFooter(data);
  };
  useEffect(()=> getFooterData());
  const loaded = () => (
    <div>
      <div>Designed & Build by Nabila Digourdi </div>
    </div>
  );
  return footer ? loaded() : <h1>loading...</h1>
};

 
  export default Footer;