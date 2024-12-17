//components
function Card(props) {
  return (
    <div className="cardnews">
      <div className="imgcard">
        <img src={props.image} alt="" />
      </div>
      <div className="post">
        <p className="blue">{props.para}</p>
        <h4>{props.title}</h4>
        <p className="gray">{props.author}</p>
      </div>
    </div>
  );
}
export default Card;
