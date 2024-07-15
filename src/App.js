import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftSide from './components/LeftSide';


function App() {
  return (
    <div className="App" style={{height:"1000px",width:"100%"}}>
  <Header />
  <LeftSide />
  <Footer />
    </div>
  );
}

export default App;
