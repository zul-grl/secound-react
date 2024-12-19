import "./app.css";
import Card from "./components/Card";
import Categorynews from "./components/Catogarynews";
import Header from "./components/Header";
import Row from "./components/Row";
import Booklet from "./components/Booklet";
import Column2 from "./components/Column2";
import Newsletter from "./components/Newsletter";
import Stickyimage from "./components/Stickyimage";
import Footer from "./components/Footer";

const news = [
  {
    image:
      "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
    para: "Зах зээл",
    title: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    author: " С.Ангирмаа 12 сарын 17, 2024",
    category: "Бизнес",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/2d83d835-062d-4a85-a4c0-c7b3887f278d",
    para: " Эдийн засаг",
    title: "Казакстаны хөгжлийн цаана",
    author: " М.Хулан 12 сарын 17, 2024",
    category: "Эдийн засаг",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/c00b3bc3-2340-49f4-84d3-a274bd10893f",
    para: "Сурталчилгаа",
    title: "Ариглан гамнаж, ашигтай хадгал",
    author: "Б. Эмүжин 12 сарын 17, 2024",
    category: "Сурталчилгаа",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/e00ad5b2-7618-4c71-9121-e1c12180184a",
    para: "Хэвлэлийн мэдээ",
    title: "Монгол бартендер дэлхийд өрсөлдлөө",
    author: "Б. Эмүжин 12 сарын 17, 2024",
    category: "Хэвлэлийн мэдээ",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/c00b3bc3-2340-49f4-84d3-a274bd10893f",
    para: "Хэвлэлийн мэдээ",
    title: "Ариглан гамнаж, ашигтай хадгал",
    author: "Б. Эмүжин 12 сарын 17, 2024",
    category: "Хэвлэлийн мэдээ",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/466e9012-492b-43c9-9449-aa118031efa9",
    para: " Олон улс",
    title:
      "Уул уурхайн салбар гадаадын хөрөнгө оруулалтын 80% гаруйг бүрдүүлж байна",
    author: " М.Хулан 12 сарын 16, 2024",
    category: "Олон улс",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/f486afba-6fea-4318-baef-27c0e2582ff4",
    para: "Бизнес",
    title: "Vans-н орлого 11 дэх сардаа дараалан унасаар",
    author: "М.Хулан 12 сарын 13, 2024",
    category: "Бизнес",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/13aeb310-9ed2-478c-bf7a-a5f21ccc34c8",
    para: "Санхүү",
    title: " Apple Pay 10 жилийн ойгоороо Монголд нэвтэрлээ",
    author: " С.Ангирмаа 12 сарын 14, 2024",
    category: "Бизнес",
  },

  {
    image:
      "https://dash-api.yld.mn/api/image/e00ad5b2-7618-4c71-9121-e1c12180184a",
    para: "Сурталчилгаа",
    title: "Монгол бартендер дэлхийд өрсөлдлөө",
    author: "Б. Эмүжин 12 сарын 17, 2024",
    category: "Сурталчилгаа",
  },

  {
    image:
      "https://dash-api.yld.mn/api/image/466e9012-492b-43c9-9449-aa118031efa9",
    para: " Эдийн засаг",
    title:
      "Уул уурхайн салбар гадаадын хөрөнгө оруулалтын 80% гаруйг бүрдүүлж байна",
    author: " М.Хулан 12 сарын 16, 2024",
    category: "Эдийн засаг",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/8234ae73-f50b-44e8-bdc4-b306f2e86d21",
    para: " Эдийн засаг",
    title:
      "Монголын эдийн засаг улсын төсөв, урсгал тэнцлийн хос алдагдалтай байна",
    author: " С.Ангирмаа 11 сарын 13, 2024",
    category: "Эдийн засаг",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/489fa1f3-0cfc-4a01-a6e3-a0f599f88404",
    para: "Сурталчилгаа",
    title: "Cleaning at its finest",
    author: "Б. Эмүжин 12 сарын 12, 2024",
    category: "Сурталчилгаа",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/489fa1f3-0cfc-4a01-a6e3-a0f599f88404",
    para: "Хэвлэлийн мэдээ",
    title: "Cleaning at its finest",
    author: "Б. Эмүжин 12 сарын 12, 2024",
    category: "Хэвлэлийн мэдээ",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/064bc337-cdc2-44b9-bba2-b7ef2519e805",
    para: " Олон улс",
    title: "2024 он дуусахаас өмнө анхаарах үйл явдлууд",
    author: " М.Хулан 12 сарын 4, 2024",
    category: "Олон улс",
  },

  {
    image:
      "https://dash-api.yld.mn/api/image/97c7282a-af3f-4f91-b4aa-0ecd350f8c0c",
    para: " Олон улс",
    title: "Нобелийн 7 хоногийн сонин хачин",
    author: " М.Хулан 12 сарын 14, 2024",
    category: "Олон улс",
  },
];

function App() {
  const categories = [
    "Бизнес",
    "Хэвлэлийн мэдээ",
    "Эдийн засаг",
    "Олон улс",
    "Сурталчилгаа",
  ];

  const column1Data = news[0];
  const column2Data = news.slice(1, 4).map((item, i) => {
    if (i === 0) {
      return item;
    } else {
      return {
        title: item.title,
        para: item.para,
        author: item.author,
        category: item.category,
        image: null,
      };
    }
  });
  const column2Data2 = news.slice(4, 7).map((item, i) => {
    if (i === 0) {
      return item;
    } else {
      return {
        title: item.title,
        para: item.para,
        author: item.author,
        category: item.category,
        image: null,
      };
    }
  });
  return (
    <div>
      <Header />
      <div>
        <div className="ads">
          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/474c14c2-118d-4cb5-9812-270c320a5cf4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241218%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241218T132425Z&X-Goog-Expires=86399&X-Goog-Signature=987cf7e6a5c27397ea1e0240b2a90361e2829215b596ca1385eb3906cf5ae3cbf2f3524aef54821fc7cf750b3a0f4efa22cf7ff5f991262bc414c7a8e630d1de8cadd922c11ffc0937090c5f97c85d92614b95fb66fe78708ebac7d4df23a25c33cbe128238d8cd45f9e3bb60ff187af77dd17fcff041fc499b83935d6f784b44470e212f6a50d6dd62029cd21c56ce5f4fbe374ae5e0f91a31de87d2dd630cd1b4722466379b3d3e6003f4ccc22ac2ca10b1d4e28095a1c47afebc245be7b5d7d36125deb7030420fc7870bd7c94a861d661256df6cfd597295d6fee4cc5587dcbd0553d31afade80bbe9185ba2c629e78e0023884cf921924a83a2c2d8e1f8&X-Goog-SignedHeaders=host"
            alt=""
          />
        </div>
        <div className="lemonade">
          <button>lemonade</button>
          <p>
            Х.Энхжин: Тийрэлтэт онгоцны Монголын анхны эмэгтэй нисгэгч | S4:E5
          </p>
        </div>
      </div>
      <Row column1={column1Data} column2={column2Data} />
      <div className="book">
        <Booklet />
        <div className="bookcard">
          <div className=" bookpost">
            <p>Хэвлэлийн мэдээ</p>
            <h4>Монгол бартендер дэлхийд өрсөлдлөө </h4>
          </div>
        </div>
        <div>
          {column2Data2.map((medee) => {
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
      <Newsletter />
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
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/bfe643d1-36ba-4da7-8217-521d83e28491.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241218%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241218T073700Z&X-Goog-Expires=86399&X-Goog-Signature=10e4c227967aee4bbd7b17ad6b111f8687f893803749cf88a1442879d4b28545cc2dcd2d8d1dabffe9f15d4fb35493cf649b813ba9447f7d79562b6f62c3b9d3bffe7816bebf15c7673062b58bd06b5fd1c3f3da3e4f468cdd3d24d54d65ea45a136cf18e4c55602346dd4e5f02e8a3ef4379f9c7b86f0483844053e8f9dabb7abc3fe440898b8eca567ee608d3bba91c9293a1a19c6edca1d0770e6d1707cc6f2972198fbcd1c65d57104e096f4e779fbfc75ecd26b14a5dbdc6da28f629586d4eefffbc1887a39fd2e35b4b706629e10847f86686e742f280248f5f7f4d5a453d6bf8e15724e80382c1b7107808920d386495756b7b2d6c3eddd29d92cb314&X-Goog-SignedHeaders=host"
            alt=""
            style={{
              width: "100%",
              maxWidth: "780px",
              aspectRatio: 780 / 126,
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
        <Stickyimage />
      </div>
      <div className="category-container">
        {categories.map((category) => (
          <Categorynews
            key={category}
            title={category}
            news={news.filter((item) => item.category === category).slice(0, 3)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
