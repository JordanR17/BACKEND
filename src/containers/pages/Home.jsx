import Header from "components/home/Header";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import Incentives from "components/home/Incentives";
import Transicion_home from "components/home/Transicion_home";
import UseCases from "components/home/UseCases";
import LocationMap from "components/home/LocationMap";

function Home(){
    return (
        <Layout>
            <Navbar/>
            <div className="pt-28 ">
                <Header/>
                <Transicion_home/>
                <Incentives/>
                <UseCases/>
                <div className="mt-16 text-center">
                  <h3 className="text-2xl font-bold text-indigo-700">¿Dónde Estamos?</h3>
                  <p className="text-gray-600 mb-4">Encuéntranos en el mapa</p>
                  <LocationMap />
                </div>
            </div>
            <Footer/>   
        </Layout>
    );
}
export default Home;