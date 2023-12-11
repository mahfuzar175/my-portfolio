import Navbar from '../Home/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer';
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";


const Main = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);

    return (          
            <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <div className="flex-1">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 400,
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
                area: 800,
              },
              value: 12,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
        </div>
    );
};

export default Main;