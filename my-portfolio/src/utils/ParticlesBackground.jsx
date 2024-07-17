import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main); // This loads the tsparticles package bundle
  };

  const particlesLoaded = (container) => {
    // console.log("container:", container); // This should print the container instance
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#1d1d1d",
          },
        },
        fpsLimit: 300,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "remove",
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
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          // links: {
          //   color: "#ffffff",
          //   distance: 150,
          //   enable: true,
          //   opacity: 0.5,
          //   width: 1,
          // },
          // collisions: {
          //   enable: true,
          // },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle", // Character shape
            // character: {
            //   value: "H", // The character you want to use
            //   font: "Verdana", // Font of the character
            //   style: "", // Style of the character
            //   weight: "400", // Weight of the character
            //   fill: true, // Whether to fill the character or not
            // },
          },
          size: {
            value: { min: 1, max: 10 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
