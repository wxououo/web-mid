import Header from "../components/Header"
import Footer from "../components/Footer"
import Description from "../components/Description";
import Items from "../components/ImageList";


export default function Home() {
    return (
        <body background="./images/bg0.jpg" >
        <div className="mainLayout">
            <Header/>
            <Items/>
            <Description/>
            <Footer/>
        </div>
        </body>
    );
}