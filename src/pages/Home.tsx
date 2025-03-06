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
}

export default Home;