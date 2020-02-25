import React from 'react';
import AppAppBar from "../modules/views/AppAppBar";
import ProductHero from "../modules/views/ProductHero";
import ProductHowItWorks from "../modules/views/ProductHowItWorks";
import AppFooter from "../modules/views/AppFooter";
import withRoot from "../modules/withRoot";
import {useHistory} from "react-router-dom";


function Home() {
    let history = useHistory();

    function goToResults() {
        history.push("/results");
    }

    return (
        <React.Fragment>
            <AppAppBar />
            <ProductHero  goToResults={goToResults}/>
            <ProductHowItWorks  goToResults={goToResults} />
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Home);