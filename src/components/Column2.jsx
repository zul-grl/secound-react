const Column2 = (props) => {
  if (props.image) {
    return (
      <div className="cardnews2-link" key={props.title}>
        <div className="rowimage">
          <img src={props.image} alt="" />
        </div>
        <div className="post-row2">
          <p className="blue">{props.para}</p>
          <h4>{props.title}</h4>
          <p className="gray">{props.author}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cardnews2-link" key={props.title}>
        <div className="post-row2">
          <p className="blue">{props.para}</p>
          <h4>{props.title}</h4>
          <p className="gray">{props.author}</p>
        </div>
      </div>
    );
  }
};
export default Column2;
