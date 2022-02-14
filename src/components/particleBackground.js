import Particles from "react-tsparticles";

const ParticleBackground = () => {
    return <div className="App">
        <Particles 
        options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
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
                bubble: {
                  distance: 300,
                  duration: 2,
                  opacity: 0.5,
                  size: 20,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 130,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#F5AF31",
              },
              links: {
                color: "#ffffff",
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 70,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 3,
              },
            },
            detectRetina: true,
          }}
        />
    </div>;
};

export default ParticleBackground;