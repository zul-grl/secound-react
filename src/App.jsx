import { Fragment, useState } from "react";
import "./app.css";

function Card() {
  const [bgColor, setBgColor] = useState("red");

  const ymarNegenYmHewle = () => {
    setBgColor("blue");
  };

  return (
    <div>
      <div>
        <h2>Naruto</h2>
      </div>
      <div className="card">Card</div>
      <img
        style={{ backgroundColor: bgColor, padding: 10 }}
        src="https://cdn.staticneo.com/w/naruto/Nprofile2.jpg"
        alt=""
      />
      <button
        style={{ padding: "10px 20px" }}
        onClick={() => ymarNegenYmHewle()}
      >
        Click here!
      </button>
    </div>
  );
}

function Header() {
  return <div className="header">Header</div>;
}

function App() {
  return (
    <div>
      <Header />
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
