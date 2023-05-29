import Header from "../components/Header"
import Footer from "../components/Footer"
import Description from "../components/Description";
import Items from "../components/ImageList";
import HomeItem from "../components/Homeitems"
import { Helmet } from "react-helmet-async"
import Homeintro from "../components/HomeIntro";

// const title = !categoryName
// ? "NORDIC NEST Shopping Cart"
// : _products[0]?.category;


export default function Home() {
    return (
        <body >
            <img src="images/bg0.jpg" alt="0" className="bgimg"/>
            <div className="mainLayout">
                <Helmet><title>iridescent</title></Helmet>
                <Header />
                <Description />
                <HomeItem />
                <Homeintro />
                <Footer />
            </div>
        </body>
    );
}