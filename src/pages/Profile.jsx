import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet-async"
import ProfileCard from "../components/ProfileCard";

// const title = !categoryName
// ? "NORDIC NEST Shopping Cart"
// : _products[0]?.category;


export default function Profile() {
    return (
        <body >
            <img src="images/bg0.jpg" alt="0" className="bgimg" />
            <div className="mainLayout">
                <Helmet><title>Register</title></Helmet>
                <Header />
                <ProfileCard />
                <Footer />
            </div>
        </body>
    );
}