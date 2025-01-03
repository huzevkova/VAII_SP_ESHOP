import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import LoginPage from "./components/Home/LoginPage";
import BookDetailPage from "./components/Book/BookDetailPage";
import SearchPage from "./components/Search/SearchPage";
import RegistrationPage from "./components/Home/RegistrationPage";
import CartPage from "./components/Cart/CartPage";
import CheckoutPage from "./components/Cart/CheckoutPage";
import OrderDoneView from "./views/Cart/OrderDoneView";
import AdminPage from "./components/Admin/AdminPage";
import AuthProvider from "./AuthProvider";
import UserInfo from "./components/User/UserInfo";
import Wishlist from "./components/User/Wishlist";
import Orders from "./components/User/Orders";
import BlogPost from "./components/Home/BlogPost";

function App() {
  return (
      <Router>
          <AuthProvider>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>

                  <Route path="/login" element={<LoginPage/>}/>

                  <Route path="/book_detail" element={<BookDetailPage/>}/>

                  <Route path="/search" element={<SearchPage/>}/>

                  <Route path="/registration" element={<RegistrationPage/>}/>

                  <Route path="/cart" element={<CartPage/>}/>

                  <Route path="/checkout" element={<CheckoutPage/>}/>

                  <Route path="/order_done" element={<OrderDoneView/>}/>

                  <Route path="/administration" element={<AdminPage/>}/>

                  <Route path="/user" element={<UserInfo/>}/>

                  <Route path="/wishlist" element={<Wishlist/>}/>

                  <Route path="/order_history" element={<Orders/>}/>

                  <Route path="/post" element={<BlogPost/>}/>

              </Routes>
          </AuthProvider>
      </Router>
  );
}

export default App;