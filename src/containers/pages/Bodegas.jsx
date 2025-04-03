import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Bodegas(){
    return (
        <Layout>
            <Navbar/>
            <div className="pt-28 ">
                Bodegas
            </div>
            <Footer/>   
        </Layout>
    );
}
export default Bodegas;