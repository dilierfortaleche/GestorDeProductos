import Header from "../components/Header";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Buttons/>
            <Footer />
        </div>
    );
};

export default Home;
