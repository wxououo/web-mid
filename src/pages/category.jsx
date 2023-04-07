import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ImageList from "../components/ImageList";
import { Helmet } from "react-helmet-async"
import planets from "../json/planets.json";

export default function Category() {
    const { productCat } = useParams();
    const _products = !productCat
      ? planets
      : planets.filter(
          x => x?.category.toUpperCase() === productCat.toUpperCase()
        );
      
      
    return (
        <body background="./images/bg0.jpg" >
        <div className="mainLayout">
            <Helmet><title>category</title></Helmet>
            <Header/>
            <ImageList
            products={_products} 
            />
            {/* <Description/> */}
            <Footer/>
        </div>
        </body>
    );
}