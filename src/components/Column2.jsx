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

  //   return (
  //     <div className="column2">
  {
    /* {props.column2.map((item) => {
        if (item.image) {
          return (
            <div className="cardnews2-link" key={item.title}>
              <div className="rowimage">
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
      })} */
  }
  // </div>
  //   );
};
export default Column2;
