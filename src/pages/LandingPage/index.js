import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from 'react-awesome-reveal';
import HeroSection from "../../components/LandingPage/HeroSection";
import RandomQuotesSection from "../../components/LandingPage/RandomQuotesSection";
import RandomAuthorsSection from "../../components/LandingPage/RandomAuthorsSection";
import TagSection from "../../components/LandingPage/TagSection";
import Footer from "../../components/Footer";



const LandingPage = () => {
    return (
        <>
            <Helmet>
                <title>Quote Reader</title>
            </Helmet>

            <HeroSection />
            <Fade direction="bottom">
                <RandomQuotesSection />
            </Fade>
            <Fade direction="bottom">
                <RandomAuthorsSection />
            </Fade>
            <Fade direction="bottom">
                <TagSection />
            </Fade>
            <Footer />
        </>
    )
}
export default LandingPage;