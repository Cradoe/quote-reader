import React from "react";
import { Helmet } from "react-helmet";
import Fade from 'react-reveal/Fade';
import HeroSection from "../../components/LandingPage/HeroSection";
import RandomQuotesSection from "../../components/LandingPage/RandomQuotesSection";
import RandomAuthorsSection from "../../components/LandingPage/RandomAuthorsSection";
import TagSection from "../../components/LandingPage/TagSection";



const LandingPage = () => {
    return (
        <>
            <Helmet>
                <title>Quote Reader</title>
            </Helmet>

            <HeroSection />
            <Fade bottom>
                <RandomQuotesSection />
            </Fade>
            <Fade bottom>
                <RandomAuthorsSection />
            </Fade>
            <Fade bottom>
                <TagSection />
            </Fade>
        </>
    )
}
export default LandingPage;