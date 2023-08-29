import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HeaderTop from './components/HeaderTop/HeaderTop';
import HeaderMain from './components/HeaderMain/HeaderMain';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Bookmark from './pages/Bookmark/Bookmark';
import SizeSelect from './pages/SizeSelect/SizeSelect';
import TradeOption from './pages/TradeOption/TradeOption';
import Payment from './pages/Payment/Payment';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderTop />
        <HeaderMain />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/size-select/:productId" element={<SizeSelect />} />
          <Route path="/trade-option" element={<TradeOption />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Router;
