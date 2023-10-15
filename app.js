import React from "react"
import ReactDOM from "react-dom/client"



// Header
const Logo = () => {
    return (
        <img
            className="logo"
            src="https://www.clipartkey.com/mpngs/m/36-363643_lunch-box-logo-png.png" alt="logo" />
    )
}


const Header = () => {
    return (
        <div className="header">
            <Logo />
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}



// Body

// config driven UI
const RestaurantList = [
    {
        type: "restaurantss",
        data: {
            id:"1234",
            name: "BurgerKing",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6a7973d432c533933de71326a0a3dde9",
            cuisines: ["Burger", "American"],
            rating: "4.2"
        }
    },
    {
        type: "restaurantss",
        data: {
            id:"1235",
            name: "KFC",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xl5gflyijnkumaloswdj",
            cuisines: ["Burger", "American"],
            rating: "4.2"
        }
    },
    {
        type: "restaurantss",
        data: {
            id:"1236",
            name: "Dominik",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ngml4fdctftplflspzxj",
            cuisines: ["Burger", "American"],
            rating: "4.2"
        }
    }
]


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


const RestaurantCard = ({ name, cuisines, rating, image }) => {

    return (
        <div className="card">
            <img src={image} />
            <h1>{name}</h1>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{rating} stars</h5>
        </div>

    )
}
const Body = () => {
    return (
        <div className="restaurant-list">{
            RestaurantList.map(restaurant => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
            })
        }
        </div>
    )
}



// footer
const Footer = () => {
    return (
        <h2>Footer</h2>
    )
}













// APP
/**
app
-Header
        -Logo
        -navbar
        -cart
-Body
        -searchBar
        -card(many)
                -Image
                -RestaurantName
                -Rating
                -Cuisine
-Footer
*/


const AppLayout = () => {
    return (
        <>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)