import "./app.css";
import Card from "./components/Card";
import Categorynews from "./components/Catogarynews";
import Header from "./components/Header";
import Row from "./components/Row";

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
  const column2Data = news.slice(1, 5).map((item, i) => {
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
      <div className="ads">
        <img
          src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/474c14c2-118d-4cb5-9812-270c320a5cf4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T131439Z&X-Goog-Expires=86399&X-Goog-Signature=308390c36ecaf474ff427b181bf6e670700c57181b022e09327cd4dfa49a7751de5b1b11bfb95406f666c7b3553e96a57709538fb4bd6635d30268e11ee9e2fe08276ea497454ced45ce0b1cda418a9e7130f4d3dc0864a9ac11f1fa7d8702a51d262e47fcc5f340d587830b27feccb9b03e4315eedc2134b67c3532d1be3e06e1903e6041a76c2d2238aea98a413c3f7977f4cf858614e2f4a2c0256bd4c21b95f18d862bffa5791292e50cc05eca682438e8304a0455381bacbce4bffa02bb5167a0d1b92eaeea4abfb7d63ea6315fb2da14c5e650f9225808360b4139a6bcedaf51897bd0d62cc8f79f7012aae10d7c103c45e0ca9b035906e54591ce9e11&X-Goog-SignedHeaders=host"
          alt=""
        />
      </div>
      <div className="lemonade">
        <button>lemonade</button>
        <p>
          Х.Энхжин: Тийрэлтэт онгоцны Монголын анхны эмэгтэй нисгэгч | S4:E5
        </p>
      </div>
      <Row column1={column1Data} column2={column2Data} />

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
    </div>
  );
}

export default App;
