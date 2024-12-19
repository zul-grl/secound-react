import Column2 from "./Column2";
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
        {props.column2.map((medee) => {
          return (
            <Column2
              image={medee.image}
              title={medee.title}
              para={medee.para}
              author={medee.author}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
