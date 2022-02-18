import { useEffect, useState } from "react";
import SkillsList from "../skillsList/SkillsList";
import "./skills.scss"
import { codingLanguages,webDevelopment, Other, Languages } from "../../data";


export default function Skills() {

    const [selected, setSelected] = useState("web");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "web",
            title: "Web-Development",
        },
        {
            id: "coding",
            title: "Coding-Languages",
        },
        {
            id: "other",
            title: "Other",
        },
        
        {
            id: "languages",
            title: "Languages",
        },
       
    ];

    useEffect(()=>{
        switch(selected){
            case "coding":
                setData(codingLanguages);
                break;
            case "web":
                setData(webDevelopment);
                break;
            case "other":
                setData(Other);
                break;
            case "languages":
                setData(Languages);
                break;
            default:
                setData(webDevelopment);
        }
    },[selected])
    return (
        <div className="skills" id="skills">
            <h1>SKILLS</h1>
            <ul>
                {list.map(item=>(
                    <SkillsList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                    <img src={d.img} alt=""/>
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}
