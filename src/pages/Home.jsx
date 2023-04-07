import Header from "../components/Header"
import Footer from "../components/Footer"
import Description from "../components/Description";
import Items from "../components/ImageList";
import HomeItem from "../components/Homeitems"
import { Helmet } from "react-helmet-async"

// const title = !categoryName
// ? "NORDIC NEST Shopping Cart"
// : _products[0]?.category;


export default function Home() {
    return (
        <body className="bg">
            <div className="mainLayout">
                <Helmet><title>iridescent</title></Helmet>
                <Header />
                <Description />
                <HomeItem />
                {/* <Items/> */}

                <Footer />
            </div>
        </body>
    );
}