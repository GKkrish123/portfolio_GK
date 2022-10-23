import React from "react";
import Particles from "react-particles-js";
import { background } from "../../profile";

const ParticlesBackground = () => {
  return (
    <div className="particle">
      {background.type === "Snow" && (
        <Particles
          height="100vh"
          width="100%"
          params={{
            particles: {
              number: {
                value: 15,
                density: {
                  enable: false,
                },
              },
              color: {
                value: "#FFFFFF",
              },
              size: {
                value: 10,
                random: true,
              },
              move: {
                direction: "bottom",
                out_mode: "out",
              },
              line_linked: {
                enable: false,
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "remove",
                },
              },
              modes: {
                remove: {
                  particles_nb: 5,
                },
              },
            },
          }}
        />
      )}
      {background.type === "Particle" && (
        <Particles
          height="100vh"
          width="100%"
          params={{
            particles: {
              collisions: {
                enable: true,
              },
              number: {
                value: 15,
                density: {
                  enable: false,
                },
              },
              color: "#000000",
              size: {
                value: 5,
                random: true,
              },
              line_linked: {
                enable: true,
                color: "#000000",
              },
              move: {
                random: true,
                speed: 1,
                direction: "bottom",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 6,
                  opacity: 0.4,
                },
                push: {
                  particles_nb: 5,
                },
              },
              retina_detect: true,
            },
          }}
        />
      )}
    </div>
  );
};

export default ParticlesBackground;
