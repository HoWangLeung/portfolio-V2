import image1 from "../../../../Common/Images/project1.jpg";
import image2 from "../../../../Common/Images/project2.jpg";
import featured1_1 from "../../../../Common/Images/featured1_1.jpg";
import featured1_2 from "../../../../Common/Images/featured1_2.jpg";
import featured1_3 from "../../../../Common/Images/featured1_3.jpg";
import featured1_4 from "../../../../Common/Images/featured1_4.jpg";

import lyrics1_1 from "../../../../Common/Images/lyrics1_1.jpg";
import d31_1 from "../../../../Common/Images/d31_1.jpg";
import lol1_1 from "../../../../Common/Images/lol1_1.jpg";
import creditCard1_1 from "../../../../Common/Images/creditCard1_1.jpg";
import bill_1 from "../../../../Common/Images/bill_1.png";
import liveTogether1 from "../../../../Common/Images/liveTogether1.png";
export const data = [
  {
    id: 1,
    end: "Fullstack",
    title: "Fruit Store",
    description:
      "A pretty complete website built with React, Spring Boot and MySQL. Key features includes authentication, cart, payment and order management. Error handling, form validation and language localization is also complete. Feel feel to try it out withe the default username/password",
    technology: "React",
    youtube_link: "https://www.youtube.com/watch?v=rTR-KqjU8bQ",
    actual_link: "https://main--dazzling-mochi-1177c6.netlify.app/#/en-GB",
    github_link: "https://github.com/HoWangLeung/fruit-store-v2",
    img: featured1_1,
    img2: featured1_2,
    img3: featured1_3,
    img4: featured1_4,
    tags: ["React", "Spring Boot", "MySQL"],
    year: 2020,
    developedBy: "mySelf",
  },
  {
    id: 2,
    end: "Fullstack",
    title: "Live Together",
    description:
      "A mobile app that helps the division of responsibilities among individuals sharing the same living space",
    youtube_link: "#",
    actual_link: "https://apps.apple.com/gb/app/livetogetherapp/id6469418761",
    github_link: "https://github.com/HoWangLeung/liveTogether",
    img: liveTogether1,
    year: 2023,
    tags: ["React Native", "Spring Boot", "MySQL"],
    developedBy: "mySelf",
  },

  {
    id: 3,
    end: "Fullstack",
    title: "Lyrics maker",
    description:
      "Created for friends in my local church. Every week slides of ppt have to be made manually in specific format , which is tedious. Therefore I came up with this quick lyrics maker and player to automate the process",
    youtube_link: "#",
    actual_link: "https://apps.apple.com/gb/app/livetogetherapp/id6469418761",
    github_link: "https://github.com/HoWangLeung/liveTogether",
    img: lyrics1_1,
    year: 2021,
    tags: ["React", "Node.JS", "Mongo"],
    developedBy: "mySelf",
  },
  {
    id: 4,
    end: "Frontend",
    title: "Bill Splitter",
    description: "An app to help split expenses",
    //"youtube_link": "#",
    actual_link: "https://sharedbillsplitter.netlify.app/",
    github_link: "https://github.com/HoWangLeung/Bill-Splitter",
    img: bill_1,
    tags: ["React"],
    year: 2022,
    developedBy: "mySelf",
  },
  // {
  //   id: 5,
  //   end: "Frontend",
  //   title: "D3.js charts",
  //   description:
  //     "Practising D3.js Charts including world map, slider, pie charts and more.",
  //   youtube_link: "#",
  //   actual_link: "https://howang-d3-viz.netlify.app/#/",
  //   github_link: "https://github.com/HoWangLeung/world-data",
  //   img: d31_1,
  //   tags: ["React"],
  //   year: 2021,
  //   developedBy: "tutorial",
  // },
  // {
  //   id: 6,
  //   end: "Frontend",
  //   title: "Dark Mode",
  //   description:
  //     "Switching between dark mode and light mode with a cool animation",
  //   youtube_link: "#",
  //   actual_link: "https://howangleung.github.io/dark-mode/#/",
  //   github_link: "https://github.com/HoWangLeung/dark-mode",
  //   img: image1,
  //   year: 2021,
  //   tags: ["React","Animation"],
  //   developedBy: "tutorial",
  // },
  {
    id: 5,
    end: "Frontend",
    title: "Animated Credit Card",
    description:
      "Animated Credit Card with cool animation. The card number on card changes according to user's input. The card also flips around when user enter cvc.",
    youtube_link: "https://www.youtube.com/watch?v=a8TDzTMr1y8",
    github_link: "https://github.com/HoWangLeung/Credit-Card-Framer-Motion",
    img: creditCard1_1,
    year: 2021,
    tags: ["React","Animation"],
    developedBy: "mySelf",
  },
  {
    id: 6,
    end: "Frontend",
    title: "LOL Slides",
    description: "Slides with cool animation in the them of League of Legends.",
    youtube_link: "https://www.youtube.com/watch?v=YYOj_cLzyH8",
    github_link: "https://github.com/HoWangLeung/framer-motion-playground",
    img: lol1_1,
    year: 2021,
    tags: ["React","Animation"],
    developedBy: "mySelf"
  },
  {
    id: 7,
    end: "Frontend",
    title: "Portfolio v1",
    description:
      "This is my first portfolio website made using only html, css and a little bit of javascript when I first started learning to code.",
    actual_link: "https://howangleung.github.io/personalPage/",
    github_link: "https://github.com/HoWangLeung/personalPage",
    img: image2,
    year: 2021,
    tags: ["Others"],
    developedBy: "mySelf",
  },
];
