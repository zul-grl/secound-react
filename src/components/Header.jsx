const dropdown = [
  "Товхимол",
  "Нийтлэлүүд",
  "Цувралууд",
  "Подкаст",
  "Бидний тухай",
];

const dropdownlist = [
  ["Lemon Press", "Inside Mongolia", "Тусгай дугаар"],
  [
    "Эдийн засаг",
    "Санхүү",
    "Бизнес",
    "Технологи",
    "Хэвлэлийн мэдээ",
    "Зах зээл",
    "Сурталчилгаа",
    "Ярилцлага",
    "Mining Week x MinePro",
  ],
  [
    "Opinions",
    "Lead With",
    "Lemonade",
    "LP Transcript",
    "Travel With",
    "Mining 101",
    "Finspiration",
    "How I Invest",
    "Web3 Nest",
    "Blockchain",
    "Lemon Pedia",
    "Stories",
    "Talks",
  ],
  ["Lunch Hour"],
  [
    "Бидний тухай",
    "Хамтран ажиллах",
    "Редакцын бодлого",
    "Бидэнтэй холбогдох",
    "Байгууллагын мэдээ",
  ],
];

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://lemonpress.mn/logo/lemonpress.svg" alt="" />
      </div>
      <div className="droplist">
        <p>Товхимол</p>
        <p>Нийтлэлүүд</p>
        <p>Цувралууд</p>
        <p>Подкаст</p>
        <p>Бидний тухай</p>
      </div>
      <div className="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.048"
          height="18.048"
          viewBox="0 0 18.048 18.048"
        >
          <g
            id="vuesax_linear_search-normal"
            data-name="vuesax/linear/search-normal"
            transform="translate(-428 -188)"
          >
            <g id="search-normal" transform="translate(428 188)">
              <path
                id="Vector"
                d="M14.288,7.144A7.144,7.144,0,1,1,7.144,0,7.144,7.144,0,0,1,14.288,7.144Z"
                transform="translate(1.504 1.504)"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                id="Vector-2"
                data-name="Vector"
                d="M1.5,1.5,0,0"
                transform="translate(15.04 15.04)"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                id="Vector-3"
                data-name="Vector"
                d="M0,0H18.048V18.048H0Z"
                fill="none"
                opacity="0"
              ></path>
            </g>
          </g>
        </svg>
        <button>Уншаад үзье</button>
      </div>
    </div>
  );
};
export default Header;
