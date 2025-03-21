import Landing from './components/landing/landing';
import Overview from './components/overview/overview';
import HowItWorks from './components/how-it-works/how-it-works';
import RaffleItems from './components/raffle-items/raffle-items';
import Organizations from './components/organizations/organizations';
import Businesses from './components/businesses/businesses';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Overview/>
      <HowItWorks/>
      <RaffleItems/>
      <Organizations/>
      <Businesses/>
      <Footer/>
    </div>
  );
}

export default App;
