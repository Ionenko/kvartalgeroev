import React from 'react';
import PurchaseSection from "../PurchaseSection";
import StockSection from "../StockSection/";
import BenefitsSection from "../BenefitsSection";

const Home = () => {
    return (
        <main>
            <BenefitsSection/>
            <PurchaseSection/>
            <StockSection/>
        </main>
    );
};

export default Home;