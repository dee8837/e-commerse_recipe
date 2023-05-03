import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';
import {Routes,Route}from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
    <Header/> 
    <Routes>
      <Route path='/'element={<Cards/>}/>
      <Route path='/cart/:id'element={< CardsDetails/>}/>
      <Route path='/home'element={<Home/>}></Route>

      </Routes>  
    </>

  );
}

export default App;
