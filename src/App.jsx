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
import "./app.css";
import Boost from "./components/Boost";
import Header from "./components/Header";
import Row from "./components/Row";
import Book from "./components/Book";
import Newsletter from "./components/Newsletter";
import RowContainer from "./components/RowContainer";
import Category from "./components/Category";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <Boost />
      <Row news={news} />
      <Book news={news} />
      <Newsletter />
      <RowContainer news={news} />
      <Category news={news} />
      <Footer />
    </div>
  );
};
export default App;
