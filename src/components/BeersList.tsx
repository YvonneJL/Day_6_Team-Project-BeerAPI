import { useEffect, useState } from "react";
import BeersItem from "./BeersItem";
import { IBeers } from '../interfaces/IBeers';
import Loading from "./loading/Loading";

const BeersList = () => {
    const [beers, setBeers] = useState<IBeers[]>([]);

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then((res) => res.json())
            .then((data) => setBeers(data))

    }, [])
    console.log(beers);

    if (!beers) return <Loading />

    return (
        <div className="beers-list">
            {beers?.map((beer, index) => (
                <BeersItem key={index} beer={beer} />
            ))}

        </div>
    );
}

export default BeersList;