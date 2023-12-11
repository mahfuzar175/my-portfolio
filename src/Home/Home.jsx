import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Skill from "./Skill";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

const Home = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
    return (
        <div>
            <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 200,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.9,
              },
            },
          },
          particles: {
            color: {
              value: "#0d47a1",
            },
            links: {
              color: "#0d47a1",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 700,
              },
              value: 20,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;