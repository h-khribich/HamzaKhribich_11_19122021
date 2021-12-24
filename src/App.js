import { Route, BrowserRouter, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/a-propos" exact component={About} />
        <Route path="/logement/:logement_id" exact component={Logement} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
