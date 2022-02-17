import "./skillsList.scss"

export default function SkillsList({title, active, setSelected,id}) {
    return (
        <li className={active ? "skillsList active" : "skillsList"}
        onClick={()=> setSelected(id)}>
            {title}
        </li>
    )
}
