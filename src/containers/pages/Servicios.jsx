import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Servicios(){
    return (
        <Layout>
            <Navbar/>
            <div className="pt-28 ">
                Servicios
            </div>
            <Footer/>   
        </Layout>
    );
}
export default Servicios;