import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/Form-Login";


const Login = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
};

export default Login;