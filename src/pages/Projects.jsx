import React from "react";
import Card from "../components/Card";
import Food_delevery from "../assets/Food_delevery.png";
import game from "../assets/game.png";
import portfolio from "../assets/portfolio.png";
import calculator from "../assets/calculator.png";

function Projects(){

    //projects data array
   const projectsData = [
  {
    title: "Food Delivery Website",
    discription:
      "A responsive food delivery web application where users can browse restaurants, explore menus, and place online orders. Built with ReactJS and Tailwind CSS for a modern and user-friendly interface.",
    image: Food_delevery,
    link: "https://food-delivery-app-phi-nine.vercel.app/",
    tech: "HTML, ReactJS, Tailwind CSS",
  },
  {
    title: "Bubble Hitter Game",
    discription:
      "A fun interactive browser-based game where players aim to hit the right bubble before time runs out. Designed with HTML, CSS, and JavaScript to enhance logical thinking and user engagement.",
    image: game,
    link: "https://vercel.com/senger-shubhams-projects/bubble-hitter-game",
    tech: "HTML, CSS, JavaScript",
  },
  {
    title: "Portfolio",
    discription:
      "A personal portfolio website showcasing my skills, projects, and achievements. Built with ReactJS and Tailwind CSS to ensure responsiveness and a professional design.",
    image: portfolio,
    link: "https://vercel.com/senger-shubhams-projects/portfolio",
    tech: "HTML, ReactJS, Tailwind CSS",
  },
  {
    title: "Java Swing Calculator",
    discription:
      "A desktop-based calculator application built using Java Swing. Supports basic arithmetic operations with a clean and simple GUI, demonstrating Java’s event-driven programming capabilities.",
    image: calculator,
    link: "https://github.com/senger-shubham/Java-Swing-Calculator",
    tech: "Java, Swing",
  },
];

    return(
<section id="projects">
    <div className=" w-[100%]  h-[1400px] bg-black text-white">
        <div className="flex justify-center items-center text-3xl font-semibold pt-[100px]">
            <h1 className="border-b-3 py-1"> My Projects</h1>
            
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          { projectsData.map((proj,index) =>(
            <Card
            key={index}
            title={proj.title}
            discription={proj.discription}
            image={proj.image}
            link={proj.link}
            tech={proj.tech}
            />
           ))}
        </div>

    </div>

</section>
    )
}

export default Projects