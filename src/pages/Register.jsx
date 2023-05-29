import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet-async"
import RegisterCard from "../components/Register";

// const title = !categoryName
// ? "NORDIC NEST Shopping Cart"
// : _products[0]?.category;


export default function Register() {
    return (
        <body >
            <img src="images/bg0.jpg" alt="0" className="bgimg" />
            <div className="mainLayout">
                <Helmet><title>Register</title></Helmet>
                <Header />
                <RegisterCard />
                <Footer />
            </div>
        </body>
    );
}