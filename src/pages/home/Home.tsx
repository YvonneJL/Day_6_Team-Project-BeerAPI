<<<<<<< HEAD:src/pages/Home.tsx
import { Link } from "react-router-dom";
import RandomBeerLink from "../components/RandomBeerLink";

const Home = () => {
    return (
        <section className="home">
            <div>
                <Link to='/beers'>
                    <img src="/img/allBeers.png" alt="" />
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </div>
            <div>
                <RandomBeerLink />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </div>
        </section>
    );
=======

import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  return (
  
    <section className='home'>
        <div className='all-beers'>
            <Link to="/allbeers">
            <img src="../../public/images/Group4.png" alt="all-beers" />
            </Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil vel in quis distinctio vitae. Aperiam, inventore repellat facilis id dolore modi asperiores, quod obcaecati nostrum hic at. Eius, cumque.</p>
        </div>

        <div className='random-beer'>
            <Link to={"/randombeer"}>
            <img src="../../public/images/Group5.png"alt="random beer" />
            </Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil vel in quis distinctio vitae. Aperiam, inventore repellat facilis id dolore modi asperiores, quod obcaecati nostrum hic at. Eius, cumque.</p>
        </div>

    </section>
  )
>>>>>>> cbb6c78dc664aef6d77ca21bf4747b2a3102ea1b:src/pages/home/Home.tsx
}

export default Home;