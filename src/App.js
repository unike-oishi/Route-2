import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/router";

import "./styles.css";

//<!-- 完全一致exactTrueにしないと、配下も全てHomeになる-->
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">p1</Link>
        <br />
        <Link to="/page2">p2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
