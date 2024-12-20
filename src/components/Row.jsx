import Column2 from "./Column2";

const Row = ({ news }) => {
  const column1Data = news[0];

  const column2Data = news.slice(1, 4).map((item, index) => ({
    title: item.title,
    para: item.para,
    author: item.author,
    category: item.category,
    image: index === 0 ? item.image : null,
  }));

  return (
    <div className="row">
      <div className="column1">
        <div className="imgrow">
          <img src={column1Data.image} alt="" />
        </div>
        <div className="post-row">
          <p className="blue">{column1Data.para}</p>
          <h2>{column1Data.title}</h2>
          <p className="gray">{column1Data.author}</p>
        </div>
      </div>
      <div className="column2">
        {column2Data.map((item) => (
          <Column2
            key={item.title}
            image={item.image}
            title={item.title}
            para={item.para}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
