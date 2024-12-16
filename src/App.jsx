import "./app.css";

function Card() {
  return <div>Card</div>;
}
function Header() {
  return <div className="header">Header</div>;
}

function App() {
  return (
    <div>
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
