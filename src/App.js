import './App.css';
import NavBar from './component/NavBar.component';
import Main from './component/main.component';
import Footer from './component/foooter.component';
import { Routes, Route} from "react-router-dom";

import About from './component/NavbarComponent/about.component';
import Hire from './component/NavbarComponent/hire.component';
import Support from './component/NavbarComponent/suport.component';


function App() {
  return (
    <div className="App">
      <NavBar/>
    
      <Routes>
        <Route exact path="/Chalo-deploy-karte-hain" element={<Main />}/>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/hire" element={<Hire/>} />
        <Route exact path="/support" element={<Support />} />
        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
