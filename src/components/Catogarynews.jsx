import Content from "./content";

const Categorynews = (props) => {
  return (
    <div className="containercont">
      <div>
        <h2>{props.title}</h2>
      </div>
      <div className="newsitem">
        {props.news.map((medee) => {
          return (
            <Content
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

export default Categorynews;
