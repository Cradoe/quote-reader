
import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import QuotesSection from "../../components/QuotesPage/QuotesSection";

const QuotesPage = ( { page } ) => {

    const currentPage = page ? page : 1;

    return (
        <>
            <Helmet>
                <title>All Quotes | QuoteReader</title>
            </Helmet>
            <NavBar />
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-row justify-center items-center gap-2  mb-10">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate text-center">Random Quotes</h2>
                </div>
                <QuotesSection currentPage={currentPage} />
            </div>
            <Footer />
        </>
    )
}

export default QuotesPage