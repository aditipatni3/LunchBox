import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";


/**

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