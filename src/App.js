import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
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
import { Suspense, lazy } from "react"; // dùng để lazy loading cho giao diện tĩnh
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
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
      </Switch>
    </Router>
  );
}

export default App;
