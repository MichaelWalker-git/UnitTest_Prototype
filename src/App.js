import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Result} from "./components/Result";
import Home from "./components/Home";
import About from "./components/About";
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";
import Upload from "./components/Upload";

export default function App() {
	const [file, setFile] = useState(null);

	function submitFile(file){
		console.log(file, "!?");
		setFile(file);
	}

    return (
        <Router>
            <div>
							<AppAppBar />
                <Switch>
									<Route exact path="/">
											<Home />
									</Route>
									<Route exact path="/upload">
										<Upload submitFile={submitFile}/>
									</Route>
									<Route path="/results">
										<Result results={file}/>
									</Route>
									<Route path="/about">
											<About />
									</Route>
                </Switch>
							<AppFooter />
            </div>
        </Router>
    );
}

