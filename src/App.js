import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect,
} from "react-router-dom";
import {Result} from "./components/Result";
import Home from "./components/Home";
import About from "./components/About";
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";
import Upload from "./components/Upload";

export default function App() {


    return (
        <Router>
            <div>
                <AppAppBar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/upload">
                        <Upload />
                    </Route>
                    <Route path="/results">
                        <Result />
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Redirect to="/" />
                </Switch>
                <AppFooter/>
            </div>
        </Router>
    );
}

