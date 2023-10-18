import { IMG_CDN_URL } from "../config";

// config driven UI

const RestaurantCard = ({ name, cuisines, rating, image }) => {

    return (
        <div className="card">
            <img src={IMG_CDN_URL} />
            <h1>{name}</h1>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{rating} stars</h5>
        </div>

    )
}

export default RestaurantCard;





/** ONE WAY OF PASSING PROPS BY DESTRUCTURING
const RestaurantCard=({restaurant})=>{
    const {name, cuisines, rating, image}=restaurant.data;
    return(
        <div className="card">
        <img src={image}/>
        <h1>{name}</h1>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{rating} stars</h5>
        </div>

    )
}
 */