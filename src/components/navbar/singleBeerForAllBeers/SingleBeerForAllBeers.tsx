import { Link } from "react-router-dom";
import { IBeer } from "../../../pages/allbeers/AllBeers";

interface IBeerProps {
    beer: IBeer
}


const SingleBeerForAllBeers = ({beer}: IBeerProps) => {


    return ( 
       <>
        <img src={beer.image_url} alt="" />
        <div className="first-details-beer">
            <h2>{beer.name}</h2>
            <p className="yellow-detail">{beer.tagline}</p>
            <p>Created by: {beer.name}</p>
            <Link to={`/allbeers/${beer._id}`}>Details</Link>
        </div>
       </>
     );
}
 
export default SingleBeerForAllBeers;