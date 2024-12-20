const Category = ({ news }) => {
  const categories = [
    "Бизнес",
    "Хэвлэлийн мэдээ",
    "Эдийн засаг",
    "Олон улс",
    "Сурталчилгаа",
  ];

  const CategorySection = ({ title, news }) => {
    return (
      <div className="containercont">
        <h3>{title}</h3>
        <div className="newsitem">
          {news.map((props) => (
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
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="category-container">
      {categories.map((category) => (
        <CategorySection
          key={category}
          title={category}
          news={news.filter((item) => item.category === category).slice(0, 3)}
        />
      ))}
    </div>
  );
};

export default Category;
