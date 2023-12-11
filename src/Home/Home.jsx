import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";
import Skill from "./Skill";


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;