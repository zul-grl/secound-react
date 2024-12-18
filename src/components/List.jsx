const List = (props) => {
  return (
    <div className="list">
      <p>{props.date}</p>
      <h5>{props.title}</h5>
    </div>
  );
};
export default List;
