import Header from "../components/Header";
import Footer from "../components/Footer";
import Productos from "../components/Productos";



const Products = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Productos/>
            <Footer />
        </div>
    );
};

export default Products;