import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import LoginPage from "./components/Home/LoginPage";
import BookDetailPage from "./components/Book/BookDetailPage";
import SearchPage from "./components/Search/SearchPage";
import BlogPost from "./components/Blog/BlogPost";
import BlogPage from "./components/Blog/BlogPage";
import RegistrationPage from "./components/Home/RegistrationPage";
import CartPage from "./components/Cart/CartPage";
import CheckoutPage from "./components/Cart/CheckoutPage";
import OrderDonePage from "./components/Cart/OrderDonePage";
import AdminPage from "./components/Admin/AdminPage";
import AuthProvider from "./AuthProvider";
import UserInfo from "./components/User/UserInfo";
import Wishlist from "./components/User/Wishlist";

function App() {
  return (
      <Router>
          <AuthProvider>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>

                  <Route path="/login" element={<LoginPage/>}/>

                  <Route path="/book_detail" element={<BookDetailPage/>}/>

                  <Route path="/search" element={<SearchPage/>}/>

                  <Route path="/post" element={<BlogPost/>}/>

                  <Route path="/blog_posts" element={<BlogPage/>}/>

                  <Route path="/registration" element={<RegistrationPage/>}/>

                  <Route path="/cart" element={<CartPage/>}/>

                  <Route path="/checkout" element={<CheckoutPage/>}/>

                  <Route path="/order_done" element={<OrderDonePage/>}/>

                  <Route path="/administration" element={<AdminPage/>}/>

                  <Route path="/user" element={<UserInfo/>}/>

                  <Route path="/wishlist" element={<Wishlist/>}/>

              </Routes>
          </AuthProvider>
      </Router>
  );
}

export default App;