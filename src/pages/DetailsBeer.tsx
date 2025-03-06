import { useEffect, useState } from "react";
import { IBeers } from "../interfaces/IBeers";
import { useNavigate, useParams } from "react-router-dom";
import BtnToHome from "../components/BtnToHome";
import Loading from "../components/loading/Loading";

const DetailsBeer = () => {
    const [singleBeer, setSingleBeer] = useState<null | IBeers>(null);

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((res) => res.json())
            .then((data) => setSingleBeer(data))
    }, [id])

    if (!singleBeer) return <Loading />
    return (
        <section className="details-beer">
            <div className="details-beer-img flex">
                <img src={singleBeer.image_url} alt={singleBeer.name} />
            </div>
            <h2>{singleBeer.name}</h2>
            <p className="gelb-text">{singleBeer.tagline}</p>
            <div className="details-beer-flex flex">
                <div>
                    <p>First brewed:</p>
                    <p>Attenuation level: </p>
                </div>
                <div>
                    <p>{singleBeer.first_brewed}</p>
                    <p>{singleBeer.attenuation_level}</p>
                </div>
            </div>
            <p className="details-beer-description">{singleBeer.description}</p>
            <button onClick={() => navigate(-1)} className="flex" type="button"><BtnToHome /></button>
        </section>
    );
}

export default DetailsBeer;