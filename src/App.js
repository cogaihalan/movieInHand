import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Detail from "./pages/Detail/Detail";
import { CheckOutTemplate } from "./templates/CheckOutTemplate/CheckOutTemplate";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Checkout from "./pages/Checkout/Checkout";
import AddFilm from "./pages/Admin/Films/AddFilm/AddFilm";
import { Suspense, lazy } from "react"; // dùng để lazy loading cho giao diện tĩnh
import Loading from "./components/Loading/Loading";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Films from "./pages/Admin/Films/Films";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import ShowTimes from "./pages/Admin/ShowTimes/ShowTimes";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Loading></Loading>
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
      </div>
      <Switch>
        <HomeTemplate path="/" exact Component={Home}></HomeTemplate>
        <HomeTemplate path="/contact" exact Component={Contact}></HomeTemplate>
        <HomeTemplate path="/home" exact Component={Home}></HomeTemplate>
        <HomeTemplate path="/news" exact Component={News}></HomeTemplate>
        <HomeTemplate
          path="/detail/:id"
          exact
          Component={Detail}
        ></HomeTemplate>
        <UserTemplate path="/login" exact Component={Login}></UserTemplate>
        <UserTemplate
          path="/register"
          exact
          Component={Register}
        ></UserTemplate>
        <CheckOutTemplate
          path="/checkout/:id"
          exact
          Component={Checkout}
        ></CheckOutTemplate>
        <AdminTemplate
          path="/admin"
          exact
          Component={Dashboard}
        ></AdminTemplate>
        <AdminTemplate
          path="/admin/films"
          exact
          Component={Films}
        ></AdminTemplate>
        <AdminTemplate
          path="/admin/films/add"
          exact
          Component={AddFilm}
        ></AdminTemplate>
        <AdminTemplate
          path="/admin/showtimes"
          exact
          Component={ShowTimes}
        ></AdminTemplate>
      </Switch>
    </Router>
  );
}

export default App;
