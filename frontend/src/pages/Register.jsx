import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterForm from "../components/Form-Register";


const Register = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <RegisterForm />
            <Footer />
        </div>
    );
};

export default Register;