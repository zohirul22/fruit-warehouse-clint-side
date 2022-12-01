import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/HomePage/About/About';
import AllProducts from './Components/HomePage/AllProducts/AllProducts';
import DetailPage from './Components/HomePage/DetailPage/DetailPage';
import Footer from './Components/HomePage/Footer/Footer';
import Header from './Components/HomePage/Header/Header';
import Home from './Components/HomePage/Home/Home';
import NotFound from './Components/HomePage/NotFound/NotFound';
import Products from './Components/HomePage/Products/Products';
import Reviews from './Components/HomePage/Reviews/Reviews';
import Login from './Components/SocialPage/Login/Login';
import RequireAuth from './Components/SocialPage/RequireAuth/RequireAuth';
import SignUp from './Components/SocialPage/SignUp/SignUp';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='reviews' element={<Reviews></Reviews>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='allProducts' element={<AllProducts></AllProducts>}></Route>
      
          <Route path='detailsPage/:detailsId' element={
            <RequireAuth>
              <DetailPage></DetailPage>
            </RequireAuth>
          
          }></Route>
      


        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
