const Row = (props) => {
  return (
    <div className="row">
      <div className="column1">
        <div className="imgrow">
          <img src={props.column1.image} alt="" />
        </div>
        <div className="post-row">
          <p className="blue">{props.column1.para}</p>
          <h2>{props.column1.title}</h2>
          <p className="gray">{props.column1.author}</p>
        </div>
      </div>
      <div className="column2">
        {props.column2.map((item) => {
          if (item.image) {
            return (
              <div className="cardnews2-link" key={item.title}>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div className="post-row2">
                  <p className="blue">{item.para}</p>
                  <h4>{item.title}</h4>
                  <p className="gray">{item.author}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="cardnews2-link" key={item.title}>
                <div className="post-row2">
                  <p className="blue">{item.para}</p>
                  <h4>{item.title}</h4>
                  <p className="gray">{item.author}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Row;
