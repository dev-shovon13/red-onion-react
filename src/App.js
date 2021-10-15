import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
// import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound'
import Footer from './Pages/Footer/Footer';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import WhyUs from './Pages/WhyUs/WhyUs';
import Food from './Pages/Food/Food';
import FoodInfo from './Pages/Food/FoodInfo/FoodInfo';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/home">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/about">
            <Header />
            <WhyUs />
            <Footer />
          </Route>
          <Route path="/food">
            <Header />
            <Food />
            <Footer />
          </Route>
          <Route path="/:id/:slug">
            <Header />
            <FoodInfo />
            <Footer />
          </Route>

          {/* <PrivateRoute exact path="/review">
          </PrivateRoute> */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
