import React from "react";
import Column2 from "./Column2";
import { Slider2 } from "./Slider";

const Book = ({ news }) => {
  const listItem = [
    {
      date: "Tue, 17 Dec 2024 23:00:00 +0000",
      title: "✈️🌍 Нэг тэнгэрт нэг л компани",
    },
    {
      date: "Mon, 16 Dec 2024 23:00:00 +0000",
      title: "🇰🇿🇲🇳 Ижил замаар ялгаатай хурдаар",
    },
    {
      date: "Sun, 15 Dec 2024 23:00:00 +0000",
      title: "🪙Крипто самурай Нью-Йоркт",
    },
    {
      date: "Thu, 12 Dec 2024 23:00:00 +0000",
      title: " 🤜 Дэлхийд буурч, Монголд өснө тэр юу вэ?",
    },
    {
      date: "Wed, 11 Dec 2024 23:00:00 +0000",
      title: "🔮🪄 Accio: Тэр эргэн ирнэ",
    },
    {
      date: "Tue, 10 Dec 2024 23:00:00 +0000",
      title: "🇲🇳 Apple Pay Монголд",
    },
    {
      date: "Mon, 09 Dec 2024 23:00:00 +0000",
      title: "📢 Ухаалаг засаг II = $40 тэрбум",
    },
    {
      date: "Sun, 08 Dec 2024 23:00:00 +0000",
      title: "🤡 Монголын ТОП асуудал: Өөртөө хэт итгэлтэй",
    },
    {
      date: "Thu, 05 Dec 2024 23:00:00 +0000",
      title: "📢 Худалдааны дайн 2.0",
    },
    {
      date: "Wed, 04 Dec 2024 23:00:00 +0000",
      title: "🤥 Сандал ширээний онц байдал",
    },
    {
      date: "Tue, 03 Dec 2024 23:00:00 +0000",
      title: "🪬 Хилийн чанад дахь хамгаалал",
    },
    {
      date: "Mon, 02 Dec 2024 23:00:00 +0000",
      title: "Танхимын Ерөнхийлөгч ➡️ Шийдэх асуудал",
    },
    {
      date: "Sun, 01 Dec 2024 23:00:00 +0000",
      title: "💰 Хамгийн том төгрөгийн бонд",
    },
    {
      date: "Thu, 28 Nov 2024 23:00:00 +0000",
      title: "✋ Даатгал: 4+1=5",
    },
    {
      date: "Wed, 27 Nov 2024 23:00:00 +0000",
      title: "🔥 Шинэ бонд айсуй",
    },
    {
      date: "Tue, 26 Nov 2024 23:00:00 +0000",
      title: "😷 Агаарын бохирдол = ₮3.9 их наяд",
    },
    {
      date: "Sun, 24 Nov 2024 23:00:00 +0000",
      title: "🇻🇳 Монголын МАА-г аварна",
    },
    {
      date: "Thu, 21 Nov 2024 23:00:00 +0000",
      title: "🏠 Монгол мөрөөдөл: Орон сууц",
    },
    {
      date: "Wed, 20 Nov 2024 23:00:00 +0000",
      title: "!!️ Том асуудал: ТӨХК",
    },
    {
      date: "Tue, 19 Nov 2024 23:00:00 +0000",
      title: "🥇 Play Store-н аваргууд",
    },
  ];

  const column2Data2 = news.slice(4, 7).map((item, index) => ({
    title: item.title,
    para: item.para,
    author: item.author,
    category: item.category,
    image: index === 0 ? item.image : null,
  }));

  const Booklet = () => {
    return (
      <div className="black">
        <p className="booktitle">Товхимлууд</p>
        <div className="listcont">
          {listItem.map((item) => (
            <div className="list" key={item.title}>
              <p>{item.date}</p>
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="book">
      <Booklet />
      <div className="bookcard">
        <div className="bookpost">
          <p>Хэвлэлийн мэдээ</p>
          <h4>Монгол бартендер дэлхийд өрсөлдлөө</h4>
        </div>
      </div>
      <div>
        <div>
          <Slider2 />
          <div className="border">
            {column2Data2.map((medee) => (
              <Column2
                key={medee.title}
                title={medee.title}
                para={medee.para}
                author={medee.author}
              />
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
