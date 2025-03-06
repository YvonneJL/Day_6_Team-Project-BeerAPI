
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
}

export default Home