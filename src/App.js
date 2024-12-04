import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import CustomerServicePage from './pages/CustomerServicePage';
import CategoryPage from './pages/CategoryPage';
import DashboardPage from './pages/DashboardPage';
import AboutUsPage from './pages/AboutUsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import { ToastContainer } from 'react-toastify';
// import i18n from './i18n';




function App() {
   return (
      <>

         <BrowserRouter >
            <Header />
           
            <ResponsiveNavbar />
            <Routes>
               <Route path="/" index element={<HomePage />} />
               <Route path='/blogs' element={<BlogPage />} />
               <Route path='/services' element={<CustomerServicePage />} />
               <Route path='/categories' element={<CategoryPage />} />
               <Route path='/admin/products' element={<DashboardPage />} />
               <Route path='/aboutus' element={<AboutUsPage />} />
               <Route path='/signin' element={<SignInPage />} />
               <Route path='/signup' element={<SignUpPage />} />
               <Route path='/contactus' element={<ContactPage />} />
               <Route path='/privacypolicy' element={<PrivacyPolicyPage />} />
               <Route path='/termsconditions' element={<TermsConditionsPage />} />
               <Route path='products/:id' element={<ProductDetails />} />
               <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <ShoppingCart/>
            <Footer />
            <ToastContainer/>
         </BrowserRouter>
      </>
   );
}

export default App;
