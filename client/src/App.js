import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages and nav tab liek W19_A22
import Nav from "./components/header";
import About from "./components/pages/about";
import Resume from "./components/pages/resume";
import Gallery from "./components/pages/gallery";
import Contact from "./components/footer";
// import './App.css';
//? may ned to tyake out swith case in order to render the entire page at ionve instead of breaking it apart 

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/home" component={About} />
        <Route exact path="/favorites" component={Resume} />
        <Route exact path="/posts/:id" component={Gallery} />
        <Route component={NoMatch} />
      </Switch>
      <Contact />
    </div>
  </Router>
  );
}

export default App;
