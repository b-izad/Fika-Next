import Header from '../components/Header';
import Slider from '../components/Slider';
import CallToAction from '../components/CallToAction';
import Menu from '../components/Menu';
import NewsLetter from '../components/NewsLetter';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';
const Home = () => {
    return (
      <div>
         <Header />
         <Slider />
         <CallToAction />
         <Menu/>
         <NewsLetter/>    
         <ScrollTop/>
         <Footer/>

        {/* Add other components as needed */}
      </div>
    );
  }
  
  export default Home;
  