import "./about.scss"

export default function About() {
    const data = [
        {
          id: 1,
          name: "ABOUT",
          
          img:
            "assets/about.jpg",
          desc:
            <ul>
              <li>- 📍Jaipur, Rajasthan</li>
              <li>- DOB: 15/08/2001 </li>
              <li>- Introvert :)</li>
            </ul>
        },
        {
          id: 2,
          name: "EDUCATION",
          
          img:
            "assets/education1.jpg",
          
          desc:
          <ul>
            <li>📖</li>
          <li>- CLASS X | CBSE | 2017</li>
          <li className="end">SAINT SOLDIER PUBLIC SCHOOL</li>
          <li>- CLASS XII | CBSE | 2019</li>
          <li className="end">VIDHYA SAGAR SCHOOL</li>
          <li>- B.TECH | 2023</li>
          <li>ELECTRICAL ENGINEERING,</li>
          <li>NIT KURUKSHETRA</li>
        </ul>,
          featured: true,
        },
        {
          id: 3,
          name: "INTERESTS",
          
          img:
            "assets/interest.png",
          
          desc:
          <ul>
          <li>- Competitive Coding</li>
          <li className="end">[CodeChef: jainakshat]</li>
          <li>- Web Development</li>
          <li>- Chess ❤</li>
          <li>- Music ♫</li>
        </ul>
        },
      ];
    return (
        <div className="about" id="about">
            <h1>ABOUT</h1>
            <div className="container">
                {data.map((d)=>(
                <div className={d.featured? "card featured" : "card"} key={d.id}>

                    <img src={d.img} alt="" />
                    <div className="center">
                        {d.desc}
                    </div>

                </div>
                ))}
            </div>
        </div>
    )
}
