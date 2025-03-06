import axios from "axios";
import { useEffect, useState } from "react";
import SingleBeerForAllBeers from "../../components/navbar/singleBeerForAllBeers/SingleBeerForAllBeers";
import "./AllBeers.css"


//Interface für die gefetchten Daten
export interface IBeer {
    image_url: string,
    _id: string,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    attenuation_level: number,
    brewers_tips: string,
    contributed_by: string,
    expireAt: string,
    __v: number
}


const AllBeers = () => {
    //fetch mit useState und useEffect
    const [allBeers, setAllBeers] = useState<IBeer[]>([])

    useEffect(()=> {
        const fetchData = async () => {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            setAllBeers(response.data)
        }
        fetchData()
    }, [])



    return ( 
<section>
    {allBeers.map((beer: IBeer)=> (
        <article key={beer._id} className="single-beer-overview">
            <SingleBeerForAllBeers beer={beer}/>
        </article>
    ))}
</section>
     );
}
 
export default AllBeers;