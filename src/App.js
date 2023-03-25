import NucampLogo from './app/assets/img/logo.png';
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import { CAMPSITES } from './app/shared/CAMPSITES';
import Header from './components/Header';
import Footer from './components/Footer';
//import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <CampsitesDirectoryPage/>
      <Footer/>
      
    </div>
  );
};

export default App;
