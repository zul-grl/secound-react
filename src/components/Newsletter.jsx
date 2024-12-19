const Newsletter = (props) => {
  return (
    <div className="contanersubs">
      <div className="subs">
        <p style={{ color: "#72808f", fontSize: "10px" }}>NEWSLETTER</p>
        <div
          style={{
            display: "flex",
            gap: "5px",
            marginBottom: "15px",
          }}
        >
          <h3 style={{ fontSize: "24px", margin: 0 }}>
            Хөрөнгө оруулалт, бизнесийн тоймыг
          </h3>
          <h3 style={{ fontSize: "24px", color: "blue", margin: 0 }}>
            5 минутад
          </h3>
        </div>
        <div className="inputemail">
          <input type="email" placeholder="Имэйл хаяг" />
          <button>Уншаад үзье</button>
        </div>
        <p
          style={{
            color: "#72808f",
            fontSize: "15px",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          Таны шийдвэр гаргалтад зайлшгүй хэрэгтэй мэдээллийг агуулсан имэйл{" "}
          товхимлыг <br />
          ажлын өдөр бүр, өглөө 07:00 цагт үнэгүй илгээнэ.
        </p>
      </div>
    </div>
  );
};
export default Newsletter;
