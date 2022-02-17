import "./App.scss"
import Topbar from "./components/topbar/Topbar"
import Home from "./components/home/Home"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import { useState } from "react"
import Menu from "./components/menu/Menu"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
   <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
   <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

   <div className="sections">
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
   </div>
    </div>
  );
}

export default App;
