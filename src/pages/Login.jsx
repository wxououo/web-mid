import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet-async"
import Login from "../components/Login"

// const title = !categoryName
// ? "NORDIC NEST Shopping Cart"
// : _products[0]?.category;


export default function Home() {
    return (
        <body >
            <img src="images/bg0.jpg" alt="0" className="bgimg"/>
            <div className="mainLayout">
                <Helmet><title>Login</title></Helmet>
                <Header />
                <Login />

                <Footer />
            </div>
        </body>
    );
}