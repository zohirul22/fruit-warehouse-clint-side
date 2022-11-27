import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './Components/HomePage/AllProducts/AllProducts';
import DetailPage from './Components/HomePage/DetailPage/DetailPage';
import Header from './Components/HomePage/Header/Header';
import Home from './Components/HomePage/Home/Home';
import Review from './Components/HomePage/Review/Review';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        
        <Route path='allProducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='detailsPage/:detailsId' element={<DetailPage></DetailPage>}></Route>

      </Routes>
    </div>
  );
}

export default App;
