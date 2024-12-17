import { Fragment, useState } from "react";
import "./app.css";
import Card from "./components/Card";
import Content from "./components/content";
import Categorynews from "./components/Catogarynews";

// function Header() {
//   return <div className="header">Header</div>;
// }
const news = [
  {
    image:
      "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
    para: "Зах зээл",
    title: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    author: " С.Ангирмаа 12 сарын 17, 2024",
    category: "business",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/2d83d835-062d-4a85-a4c0-c7b3887f278d",
    para: " Эдийн засаг",
    title: "Казакстаны хөгжлийн цаана",
    author: " М.Хулан 12 сарын 17, 2024",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/c00b3bc3-2340-49f4-84d3-a274bd10893f",
    para: "Сурталчилгаа",
    title: "Ариглан гамнаж, ашигтай хадгал",
    author: "Б. Эмүжин 12 сарын 17, 2024",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/466e9012-492b-43c9-9449-aa118031efa9",
    para: " Эдийн засаг",
    title:
      "Уул уурхайн салбар гадаадын хөрөнгө оруулалтын 80% гаруйг бүрдүүлж байна",
    author: " М.Хулан 12 сарын 16, 2024",
  },
];

function App() {
  return (
    <div>
      <div className="container">
        {news.map((medee) => {
          return (
            <Card
              image={medee.image}
              title={medee.title}
              para={medee.para}
              author={medee.author}
            />
          );
        })}
      </div>
      <Categorynews title="Бизнес" news={news} />
    </div>
  );
}

export default App;
