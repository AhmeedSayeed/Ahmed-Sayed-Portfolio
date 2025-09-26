import onlineLibraryWebsite from '../assets/online library website.png'
import gamesRentalSystem from '../assets/games rental system.jpg'
import elevvoInternshipTasks from '../assets/elevvo internship tasks.png'
import restaurantManagementSystem from '../assets/restaurant management system.png'
import babyPhotoshop from '../assets/baby photoshop.png'

export const projectsData = [
  {
    id: 1,
    title: "Online Library Website",
    description: "A comprehensive web application providing users with book search and borrowing capabilities while allowing \
    administrators to manage the library inventory.",
    technologies: ["Vanilla JS", "Django", "SQLite", "Python"],
    image: onlineLibraryWebsite,
    liveUrl: "https://online-library-website-five.vercel.app",
    githubUrl: "https://github.com/AhmeedSayeed/Online-Library-website",
    featured: true
  },
  {
    id: 2,
    title: "Dola Cream Landing Page",
    description: "A comprehensive web application providing users with book search and borrowing capabilities while allowing \
    administrators to manage the library inventory.",
    technologies: ["Vanilla JS", "HTML", "CSS"],
    image: onlineLibraryWebsite,
    liveUrl: "https://dola-cream.vercel.app",
    githubUrl: null,
    featured: true
  },
  {
    id: 3,
    title: "Games Rental System",
    description: "A Windows forms application where users can browse, rent, and return games, while admins manage the catalog. \
    Includes reporting queries for insights into rentals, popular titles, and vendor performance.",
    technologies: ["C#", "Winforms", "ADO.NET", "Microsoft SQL Server"],
    image: gamesRentalSystem,
    liveUrl: null,
    githubUrl: "https://github.com/AhmeedSayeed/DB-PJK",
    featured: true
  },
  {
    id: 4,
    title: "Elevvo Internship Tasks",
    description: "A set of practical web applications including a Landing Page, Personal Blog, and a Weather Dashboard. \
    Each project demonstrates modern UI design with React and Tailwind CSS, along with API integration, state management, and reusable components.",
    technologies: ["React JS", "Tailwind CSS", "JSX"],
    image: elevvoInternshipTasks,
    liveUrl: "https://elevvo-internship.vercel.app/",
    githubUrl: "https://github.com/AhmeedSayeed/Elevvo-Internship",
    featured: true
  },
  {
    id: 5,
    title: "Baby Photoshop",
    description: "A comprehensive image editing application developed with C++ and Qt, featuring 22 custom-designed filters \
    including edge detection, blur effects, and artistic transformations.",
    technologies: ["C++", "QT"],
    image: babyPhotoshop,
    liveUrl: null,
    githubUrl: "https://github.com/AhmeedSayeed/Baby-Photoshop",
    featured: true
  },
  {
    id: 6,
    title: "Restaurant Management System",
    description: "A Java console application built with OOP principles, featuring Owner and Cashier modes for menu management, \
    order processing, and revenue tracking.",
    technologies: ["Java"],
    image: restaurantManagementSystem,
    liveUrl: null,
    githubUrl: "https://github.com/AhmeedSayeed/Restaurant-Management-System",
    featured: true
  },
];