import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import Diskovery from "../components/Diskovery/Diskovery";
import Coffe from "../components/Coffe/Coffe";
import Build from "../components/Build/Build"
import Best from "../components/Best/Best";
import Feature from "../components/Feature/Feature";
import Despina from "../components/Despina/Despina";
import Blog from "../components/Blog/Blog";
import Client from "../components/Client/Client";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>      
      <Card/>
      <Diskovery/>
      <Build/>
      <Best/>
      <Blog/>
      <Client/>
      <Feature/>
      <Despina/>
      <Footer/>
    </div>
  );
}

export default App;
