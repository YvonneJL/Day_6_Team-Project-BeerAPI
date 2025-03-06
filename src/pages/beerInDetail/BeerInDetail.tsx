import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IBeer } from "../allbeers/AllBeers";
import axios from "axios";
import "./BeerInDetail.css"

const BeerInDetail = () => {

    const {id} = useParams()

    console.log(id);

    const [singleBeer, setSingleBeer] = useState<IBeer>()

    useEffect(()=> {
        const fetchData = async () => {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            console.log(response);
            setSingleBeer(response.data)
        }
        fetchData()
    }, [])


    return ( 
    <section className="beer-detail-page">
    <div className="image-container">
    <img src={singleBeer?.image_url} alt="" />
    </div>
    <article>
    <h1>{singleBeer?.name}</h1>
        <p className="tagline">{singleBeer?.tagline}</p>
        <div>
        <div className="first-brewed-div">
            <p>First brewed:</p>
            <p>{singleBeer?.first_brewed}</p>
        </div>
        <div className="first-brewed-div">
            <p>Atenuation level:</p>
            <p>{singleBeer?.attenuation_level}</p>
        </div>
        </div>
        <p className="detail-desc">{singleBeer?.description}</p>
    <Link to="/allbeers">Back</Link>
    </article>
    </section> 
);
}
 
export default BeerInDetail;