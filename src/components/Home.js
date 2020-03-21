import React from 'react';
import ProductHero from "../modules/views/ProductHero";
import ProductHowItWorks from "../modules/views/ProductHowItWorks";
import withRoot from "../modules/withRoot";
import {useHistory} from "react-router-dom";


function Home() {
    let history = useHistory();

    function goToResults() {
        history.push("/upload");
    }

    return (
        <React.Fragment>
            <ProductHero  goToResults={goToResults}/>
            <ProductHowItWorks  goToResults={goToResults} />
        </React.Fragment>
    );
}

export default withRoot(Home);
