import Header from "../components/Header";
import TraditionsCards from "../components/TraditionsCards";
import Footer from "../components/Footer";

import { useParams } from "react-router-dom";

function Tranditions() {
  const { country } = useParams();

  return (
    <div>
      <Header showNavDefault={false} />
      <TraditionsCards country={country} />
      <Footer />
    </div>
  );
}

export default Tranditions;