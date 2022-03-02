import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <nav style={navStyle}>
        <Link to="/">
          <div>Nabila<span>Digourdi</span></div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>My Work</div>
        </Link>
        <Link to="/contact">
          <div>Contact</div>
        </Link>
        <Link to="/resume">
          <div>Resume</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;