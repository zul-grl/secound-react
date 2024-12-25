import { Slider3 } from "./Slider";

const Card = ({ image, para, title, author }) => {
  return (
    <div className="cardnews">
      <div className="imgcard">
        <img src={image} alt="" />
      </div>
      <div className="post">
        <p className="blue">{para}</p>
        <h4>{title}</h4>
        <p className="gray">{author}</p>
      </div>
    </div>
  );
};

const RowContainer = ({ news }) => {
  return (
    <div className="rowcontainer">
      <div className="container">
        {news.slice(0, 4).map((medee) => (
          <Card
            key={medee.title}
            image={medee.image}
            title={medee.title}
            para={medee.para}
            author={medee.author}
          />
        ))}

        <img
          src="./rowimg.png"
          alt=""
          style={{
            width: "100%",
            maxWidth: "780px",
            aspectRatio: "780/126",
            marginBottom: "22px",
          }}
        />

        {news.slice(4, 8).map((medee) => (
          <Card
            key={medee.title}
            image={medee.image}
            title={medee.title}
            para={medee.para}
            author={medee.author}
          />
        ))}

        <div
          style={{
            display: "flex",
            fontWeight: "700",
            maxWidth: "780px",
            width: "100%",
            padding: "7px 20px 6px",
            justifyContent: "center",
            backgroundColor: "#f5f8fc",
          }}
        >
          Илүү үзэх
        </div>
      </div>
      <div className="images">
        <Slider3 />
        <div
          style={{
            maxWidth: "380px",
            aspectRatio: 380 / 500,
          }}
        >
          <img src="./stickyimg.png" alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
