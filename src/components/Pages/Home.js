import React from 'react';
import PurchaseSection from "../PurchaseSection";
import StockSection from "../StockSection/";
import BenefitsSection from "../BenefitsSection";
import CallBackModal from "../CallBackModal";

const Home = () => {
    return (
        <main>
            <BenefitsSection/>
            <PurchaseSection/>
            <CallBackModal/>
            <StockSection/>
        </main>
    );
};

export default Home;