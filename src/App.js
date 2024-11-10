import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from "./components/LoginPage";
import BookDetailPage from "./components/BookDetailPage";
import SearchPage from "./components/SearchPage";
import BlogPost from "./components/BlogPost";
import BlogPage from "./components/BlogPage";
import RegistrationPage from "./components/RegistrationPage";
import CartPage from "./components/CartPage";

function App() {
  return (
      <Router>
          <Routes>
              {/* home page */}
              <Route path="/" element={<HomePage/>}/>

              <Route path="/login" element={<LoginPage/>}/>

              <Route path="/book_detail" element={<BookDetailPage/>}/>

              <Route path="/search" element={<SearchPage/>}/>

              <Route path="/blog" element={<BlogPost/>}/>

              <Route path="/blog_posts" element={<BlogPage/>}/>

              <Route path="/registration" element={<RegistrationPage/>}/>

              <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;