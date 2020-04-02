import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
//import {About as Potato} from "./routes/About";
import Navigation from "./components/Navigation"
//BrowserRouter "#" none
function App(){
    return (<HashRouter>
        <Navigation />

        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About}/>
       

    </HashRouter>
    );
}
export default App;
