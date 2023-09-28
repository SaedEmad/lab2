
import './App.css';
import './main.js';
import Header from './header';
import Main from './main.js';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import products from './products';

function App() {
  return (
   <>
    <Header />
    

    <Router>
      <Routes>
        <Route  path='/' Component={Main}></Route>
        <Route  path='/products' Component={products}></Route>


      </Routes>

      
    </Router>

   
   </>
  );
}

export default App;

