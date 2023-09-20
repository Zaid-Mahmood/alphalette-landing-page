import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import SectionThree from './Components/SectionThree';
import SectionTwo from './Components/SectionTwo';
import SectionFour from './Components/SectionFour';
import SectionFive from './Components/SectionFive';
import Footer from './Components/Footer';
import SectionOne from './Components/SectionOne';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive/>
      <Footer/>
    </div>
  );
}

export default App;
