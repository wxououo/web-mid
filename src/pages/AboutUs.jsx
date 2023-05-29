import Header from "../components/Header"
import Footer from "../components/Footer"
import Description from "../components/Description";
import Items from "../components/ImageList";
import HomeItem from "../components/Homeitems"
import { Helmet } from "react-helmet-async"
import Blog from "../components/AboutUs";
import AboutUs from "../components/AboutUs";

// const title = !categoryName
// ? "NORDIC NEST Shopping Cart"
// : _products[0]?.category;


export default function Home() {
    return (
        <body >
            <img src="images/bg0.jpg" alt="0" className="bgimg"/>
            <div className="mainLayout">
                <Helmet><title>About Us</title></Helmet>
                <Header />
                <AboutUs />
                <Footer />
            </div>
        </body>
    );
}