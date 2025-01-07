import { useEffect, useState } from 'react';
import { Particles } from '@tsparticles/react';
import { loadFull } from "tsparticles";

const Auroras = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticles();
  }, []);

  const initParticles = async () => {
    await loadFull(window.tsParticles);
    setInit(true);
  };

  return (
    <div className='absolute inset-0'>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            particles: {
              color: {
                value: ["#9186e6", "#29bbe5"]
              },
              number: {
                value: 25
              },
              size: {
                value: { min: 1, max: 100 }
              },
              move: {
                enable: true,
                direction: "random",  // Random directions
                speed: { min: 0.1, max: 1 },
                straight: false,
                random: true, // Randomness movement
                outMode: "out"       // This handles what happens at canvas boundaries
              },              
              opacity: {
                value: { min: 0.1, max: 0.8 }
              },
            }
          }}
        />
      )}
    </div>
  );
};

export default Auroras;
