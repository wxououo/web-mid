
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import planets from "../json/planets.json";
import ProductDetail from "../components/ProductDetail"

function Product() {
   const { productId } = useParams();
   const product = planets.find(
      (x) => x.id === productId
   );

   return (
      
      <div>
           <img src="../../../public/images/bg0.jpg" alt="0" className="bgimg"/>
         <Helmet><title>{product.name}</title></Helmet>
         <Header
            className="layoutHeader"
            // title="Product Detail"
            // slogan="An example made by Vite."
         />
         <ProductDetail product={product}  />
         <Footer  />
      </div>
   );
}

export default Product;
