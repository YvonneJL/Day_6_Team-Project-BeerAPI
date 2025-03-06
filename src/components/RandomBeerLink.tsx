import { useEffect, useState } from "react";
import { IBeers } from "../interfaces/IBeers";
import { Link } from "react-router-dom";

const RandomBeerLink = () => {
    const [beerIds, setBeerIds] = useState<IBeers[]>([]);

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => response.json())
            .then((data) => {
                const ids = data.map((beer: IBeers) => beer._id);
                setBeerIds(ids);
            })
            .catch((error) => console.error('Error fetching beers:', error));
    }, []);

    const getRandomId = () => {
        const randomIndex = Math.floor(Math.random() * beerIds.length);
        return beerIds[randomIndex];
    };

    const randomBeerId = getRandomId();

    return (
        <Link to={`/randombeer/${randomBeerId}`}>Hallo
        </Link>
    );
}

export default RandomBeerLink;