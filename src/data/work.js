import work1 from "../assets/img/work/cleancar.webp";
import work2 from "../assets/img/work/MoneyMate.webp";
import work3 from "../assets/img/work/socialnetwork.webp";
import work4 from "../assets/img/work/shopshop.webp";
import work5 from "../assets/img/work/loft.webp";
import work6 from "../assets/img/work/budbaza.webp";

export const works = [
  {
    id: 3,
    date: "12.10.2024",
    name: "Social Network 'Pied Piper'",
    description:
      "This project was created with the MERN stack and RTK (Redux Toolkit) for state management. Users can register, publish posts, comment and like content. Socket.IO is used for real-time communication. The server side is implemented in Node.js and Express, using MongoDB for data storage and authorization with JWT. The client side is built on React and stylized with Tailwind CSS.",
    imgUrl: work3,
    gitUrl: "https://github.com/PavloPopovV/Social_Network",
    webUrl: "https://social-network-qptv.onrender.com/login",
  },
  {
    id: 4,
    date: "05.09.2024",
    name: "Online Store 'ShopShop'",
    description:
      "In the project, I used the MERN technology stack to create an online store with an administrative panel. MongoDB was used to store data. On the server side, I used Node.js and Express, which implements a RESTful API for interacting with the client side, as well as for processing requests to add, edit, and delete categories and products. (JWT) technology was used for user authorization.",
    imgUrl: work4,
    gitUrl: "https://github.com/PavloPopovV/ShopShop",
    webUrl: "https://taupe-selkie-f75dfe.netlify.app/",
  },
  {
    id: 2,
    date: "22.07.2024",
    name: "Application for managing expenses 'MoneyMate'",
    description:
      "The entire project was set up using Vite, and React using useState, useEffect and Context Api. For storage, I used IndexedDB and LocalStorage, which allows to store data and work offline. All styles are composed using Styled Components.",
    imgUrl: work2,
    gitUrl: "https://github.com/PavloPopovV/MoneyMate",
    webUrl: "https://moneymate-nx2l.onrender.com/",
  },
  {
    id: 1,
    date: "29.05.2024",
    name: "Website 'CleanCar'",
    description:
      "To create the site, I used the basic features of React, including components, state management, and routing. For comfort, I used React Router to provide the ability to navigate between different pages. Styling was implemented using Styled Components.",
    imgUrl: work1,
    gitUrl: "https://github.com/PavloPopovV/CleanCar",
    webUrl: "https://cleancar.onrender.com/",
  },

  {
    id: 5,
    date: "06.02.2024",
    name: "Online Store 'LOFT.SHOPONLINE'",
    description:
      "A commercial project created for comfortable selection and purchase of goods online. The project was developed using HTML, CSS (SCSS), JavaScript and WordPress.  I developed the site design, worked in a team and actively communicated with the client to clarify the requirements. The main functionality includes browsing the catalog, adding products to the cart, and placing orders",
    imgUrl: work5,
    gitUrl: "https://github.com/PavloPopovV/LoftShopOnline",
    webUrl: "https://loftshoponline.com.ua",
  },
  {
    id: 6,
    date: "20.09.2023",
    name: "Online Store 'BydBaza'",
    description:
      "In that project, I used HTML, CSS (SCSS), JavaScript, and WordPress. The store's functionality allows you to browse the catalog, add products to the cart, and place an order. Also commercial project, where I work in team and communicated with the client",
    imgUrl: work6,
    gitUrl: "https://github.com/PavloPopovV/BydBaza",
    webUrl: "https://budbaza.net",
  },

];
