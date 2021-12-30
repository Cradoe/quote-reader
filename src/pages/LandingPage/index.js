import React from "react";
import HeroSection from "../../components/LandingPage/HeroSection";
import RandomQuotesSection from "../../components/LandingPage/RandomQuotesSection";
import RandomAuthorsSection from "../../components/LandingPage/RandomAuthorsSection";
import TagSection from "../../components/LandingPage/TagSection";



const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <RandomQuotesSection />
            <RandomAuthorsSection />
            <TagSection />
        </>
    )
}
export default LandingPage;