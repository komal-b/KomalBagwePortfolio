import { BrowserRouter } from "react-router-dom";
import { Projects, Contact, Experience, Hero, Navbar, Skills, Education} from './components';
const App = () => {
  return (
   <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero id="about"/>
          <Projects id="projects"/> 
          <Skills />
          <Experience />
          <Education />
          <div className="relative z-0">
              <Contact />
          </div>
        </div>
        
      </div>
   </BrowserRouter>
  )
}

export default App

