import React from 'react';
import AppAppBar from "../modules/views/AppAppBar";
import ProductHero from "../modules/views/ProductHero";
import ProductValues from "../modules/views/ProductValues";
import ProductHowItWorks from "../modules/views/ProductHowItWorks";
import ProductCategories from "../modules/views/ProductCategories";
import ProductSmokingHero from "../modules/views/ProductSmokingHero";
import ProductCTA from "../modules/views/ProductCTA";
import AppFooter from "../modules/views/AppFooter";
import withRoot from "../modules/withRoot";


function Home() {
    return (
        <React.Fragment>
            <AppAppBar />
            <ProductHero />
            <ProductValues />
            <ProductCategories />
            <ProductHowItWorks />
            <ProductCTA />
            <ProductSmokingHero />
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Home);