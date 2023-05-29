import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ImageList from "../components/ImageList";
import { Helmet } from "react-helmet-async"
import planets from "../json/planets.json";


// 洗牌函數，使用 Fisher-Yates 洗牌算法
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // 將商品列表隨機排序
  
export default function Category() {
    const _products = planets
    const shuffledProducts = shuffleArray(_products);
  
    // const { kirbydisplay } = useParams();
    // const kirby = ! kirbydisplay
    //     ? planets
    //     : planets.filter(
    //         x => x?.aa.toUpperCase() ===  none
    //     );

    return (
        <body>
            <img src="/images/bg0.jpg" alt="0" className="bgimg"/>
            <div className="mainLayout">
                <Helmet><title>All Products</title></Helmet>
                <Header />
                <ImageList
                    products={_products}
                />
                {/* <Description/> */}
                <Footer />
            </div>
        </body>
    );
}