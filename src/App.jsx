import "./app.css";

function Card() {
  return (
    <div>
      <div>
        <h2>Naruto</h2>
      </div>
      <div className="card">Card</div>
      <img src="https://cdn.staticneo.com/w/naruto/Nprofile2.jpg" alt="" />
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
