import { Link } from "react-router-dom";
import { IBeers } from "../interfaces/IBeers";
import Loading from "./loading/Loading";

interface IBeersItemProps {
    beer: IBeers;
}

const BeersItem: React.FC<IBeersItemProps> = ({ beer }) => {
    if (!beer) return <Loading />;
    return (
        <>
            <div className="beers-item flex">
                <img src={beer.image_url} alt={beer.name} />
                <div className="beers-item-info">
                    <h3>{beer.name}</h3>
                    <p className="gelb-text">{beer.tagline}</p>
                    <p>Created by: {beer.name}</p>
                    <Link to={`/beers/${beer._id}`}>Details</Link>
                </div>
            </div>
            <hr />
        </>
    );
}

export default BeersItem;