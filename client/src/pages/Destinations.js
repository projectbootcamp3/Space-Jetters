import React from 'react';
import destination1 from "../assets/destinations/destination1.png"
import destination2 from "../assets/destinations/destination2.png"
import destination3 from "../assets/destinations/destination3.png"
import destination4 from "../assets/destinations/destination4.png"
import destination5 from "../assets/destinations/destination5.png"
import { Link } from "react-router-dom";
const Destinations = () => {
  return (
    <div className="destinations-wrapper">
      <div className="destinations-intro">
        <h2 className="sub-title">Destinations</h2>
        <div>
          <article>
            We offer multiple destinations to our customers, each one with an unique experience.
          </article>
        </div>
        <div>
          <ul className="flex flex-destinations">
            <a href='#moon' className='dest'><li> MOON  *</li></a>
            <a href='#mars' className='dest'><li> MARS  *</li></a>
            <a href='#europa' className='dest'><li> EUROPA  *</li></a>
            <a href='#titan' className='dest'><li> TITAN  *</li></a>
            <a href='#spacestation' className='dest'><li>SPACE STATION</li></a>
          </ul>
        </div>
      </div>
      <div className="shadow-effect-1"></div>
      <section className="destinations flex-columns first-destination">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img id='moon' alt='Moon' className="astronault" src={destination1} />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-primary">
              <h2> MOON</h2>
              <p>
                The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth (comparable to the width of Australia), it is the fifth largest satellite in the Solar System, the largest satellite in the Solar System relative to its major planet, and larger than any known dwarf planet. The Moon is a planetary-mass object that formed a differentiated rocky body, making it a satellite planet under the geophysical definitions of the term. It lacks any significant atmosphere, hydrosphere, or magnetic field. Its surface gravity is about one-sixth of Earth's 0.1654 . Jupiter's moon Io is the only satellite in the Solar System known to have a higher surface gravity and density.
              </p>
              <button>
                <Link to="/destinations/moon" className="btn-secondary">proceed</Link>
              </button>
            </div>
          </div>
        </div>
      </section >
      <div className="shadow-effect-2"></div>
      <div className="shadow-effect-1"></div>
      <section className="destinations flex-columns">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img id='mars' alt='Mars' className="astronault" src={destination2} />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-primary">
              <h2>MARS</h2>
              <p>
                Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In the English language, Mars is named for the Roman god of war. Mars is a terrestrial planet with a thin atmosphere, and has a crust primarily composed of elements similar to Earth's crust, as well as a core made of iron and nickel. Mars has surface features such as impact craters, valleys, dunes, and polar ice caps. It has two small and irregularly shaped moons: Phobos and Deimos.
              </p>
              <button >
                <Link to="/destinations/mars" className="btn-secondary">proceed</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="shadow-effect-2"></div>
      <div className="shadow-effect-1"></div>
      <section className="destinations flex-columns">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img id='europa' alt='Europa' className="astronault" src={destination3} />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-primary">
              <h2>EUROPA</h2>
              <p>
                Europa is the smallest of the four Galilean moons orbiting Jupiter, and the sixth-closest to the planet of all the 80 known moons of Jupiter.Slightly smaller than Earth's Moon, Europa is primarily made of silicate rock and has a water-ice crust[14] and probably an iron–nickel core. It has a very thin atmosphere, composed primarily of oxygen. Its white-beige surface is striated by light tan cracks and streaks, but craters are relatively few. In addition to Earth-bound telescope observations, Europa has been examined by a succession of space-probe flybys, the first occurring in the early 1970s.
                Europa has the smoothest surface of any known solid object in the Solar System. The apparent youth and smoothness of the surface have led to the hypothesis that a water ocean exists beneath the surface, which could conceivably harbor extraterrestrial life.
              </p>
              <button>
                <Link to="/destinations/europa" className="btn-secondary">proceed</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="shadow-effect-2"></div>
      <div className="shadow-effect-1"></div>
      <section className="destinations flex-columns">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img id='titan' alt='Titan' className="astronault" src={destination4} />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-primary">
              <h2>TITAN</h2>
              <p>
                Titan is the largest moon of Saturn and the second-largest natural satellite in the Solar System. It is the only moon known to have a dense atmosphere, and is the only known object in space other than Earth on which clear evidence of stable bodies of surface liquid has been found.
                Titan is one of seven gravitationally rounded moons in orbit around Saturn, and the second most distant from Saturn of those seven. Frequently described as a planet-like moon, Titan is 50% larger (in diameter) than Earth's Moon and 80% more massive.Titan is primarily composed of ice and rocky material, which is likely differentiated into a rocky core surrounded by various layers of ice, including a crust of ice Ih and a subsurface layer of ammonia-rich liquid water.
              </p>
              <button>
                <Link to="/destinations/titan" className="btn-secondary">proceed</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="shadow-effect-2"></div>
      <div className="shadow-effect-1"></div>
      <section className="destinations flex-columns">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img id='spacestation' alt='Space Station' className="astronault" src={destination5} />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-primary">
              <h2>SPACE STATION</h2>
              <p>
                The International Space Station (ISS) is the largest modular space station currently in low Earth orbit. It is a multinational collaborative project involving five participating space agencies: NASA (United States), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada). The ownership and use of the space station is established by intergovernmental treaties and agreements.The station serves as a microgravity and space environment research laboratory in which scientific research is conducted in astrobiology, astronomy, meteorology, physics, and other fields.
              </p>
              <button>
                <Link to="/destinations/spacestation" className="btn-secondary">proceed</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
};
export default Destinations;