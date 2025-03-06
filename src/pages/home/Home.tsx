import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return (
        <section className="home">
            <div>
                <Link to='/allbeers'>
                    <img src="../../../public/images/Group4.png" alt="" />
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </div>
            <div>
            <Link to='/randombeer'>
                    <img src="../../../public/images/Group5.png" alt="" />
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </div>
        </section>
    )};

export default Home;