function Content(props) {
  return (
    <div className="cardnews2">
      <div className="imgcard2">
        <img src={props.image} alt="" />
      </div>
      <div className="post2">
        <p className="blue">{props.para}</p>
        <h4>{props.title}</h4>
        <p className="gray">{props.author}</p>
      </div>
    </div>
  );
}

export default Content;
