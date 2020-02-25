import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Result} from "./components/Result";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/results">
                        <Result />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

