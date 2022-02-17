import { useState } from "react";
import "./projects.scss"

export default function Projects() {
    const [currentSlide,setCurrentSlide]=useState(0);

    const data = [
      {
        id: "6",
        
        title: "BLOG",
        desc:
          "This is a Blog built using MERN Stack. User can Register, Login, Read Articles, Write Articles and much more.",
        img:
          "assets/blog.jpeg",
        site: "https://blog-jainakshat.netlify.app/",
      },
        {
          id: "1",
          
          title: "MOVIE DATABASE",
          desc:
            "This is a Movie Database built using React-js.It fetches data from moviedatabase API. User can search for a movie and get details such as Running time, budget, cast and much more.",
          img:
            "assets/movie.jpeg",
          site: "https://moviedatabase-jainakshat.netlify.app/",
        },
        {
          id: "2",
          
          title: "TODOS APP",
          desc:
            "This is a Todos app built using MERN stack. User can Sign-In using Google-sign-In button and add tasks to do.",
          img: "assets/todos.jpeg",
          site: "https://todos-jainakshat.netlify.app/",

        },
        {
          id: "4",
          
          title: "BUDGET APP",
          desc:
            "This is a Budget app built using React-js and Bootstrap. User can manage Budgets and Expenses in a ezzy way.",
          img:
            "assets/budget.jpeg",
          site: "https://budget-jainakshat.netlify.app/",

        },
        {
          id: "5",
          
          title: "COVID TRACKER",
          desc:
            "This is world Covid-19 tracker built using React-js. It fetches data from an API. User can get details of covid-19 for all Countries.",
          img:
            "assets/covid.jpeg",
          site: "https://covidtracker-jainakshat.netlify.app/",

        },
        {
          id: "3",
          
          title: "CALCULATOR",
          desc:
            "A simple Calculator built using React-js.",
          img:
            "assets/calc.jpeg",
          site: "https://calc-jainakshat.netlify.app/",

        },
        
       
      ];

      const handleClick = (way)=>{
          way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 4) :
          setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1 : 0)
      }
    return (
        <div className="projects" id="projects">
            <h1 className="heading">PROJECTS</h1>
            <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
                {data.map((d)=>(
                <div className="container" id={d.id}>
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <a href={d.site}><button className="site">visit site</button></a>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                    
                </div>))
}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()} />

        </div>
    )
}
