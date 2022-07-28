import React from 'react';
import rocketImage1 from "../assets/rocket-images/Rocket-1.jpg";
import rocketImage2 from "../assets/rocket-images/Rocket-2.jpg";

const Rockets = () => {
  // const rockets = [
  //   {
  //     name: "Sonic Rocket",
  //     image: rocketImage1,
  //   },
  //   {
  //     name: "Super-Sonic Rocket",
  //     image: rocketImage2,
  //   }
  // ];
    
  return (
    <div class="rocketContainer">
    <div>
      <h2 className="sub-title"> Check available rockets</h2>
      
    </div>
  
    <section id="rocket-selection" class="rocket">
      <img 
									src={rocketImage1} height={400} width={600} class="float-left" alt="Image of rocekt"
								
									
								></img>
                <h2>Sonic Rocket</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                            voluptas laborum repellendus dolorum! Harum, cupiditate.
                </p>
    </section>

    <section id="superRocket-selection" class="rocket">
      <img 
									src={rocketImage2} height={400} width={600} class="float-right" alt="Image of 2nd rocket"
								
									
								></img>
                <h2>Super-Sonic Rocket</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                            voluptas laborum repellendus dolorum! Harum, cupiditate.
                </p>
    </section>
    </div>

  );
};

export default Rockets;