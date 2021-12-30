import { Link } from "@reach/router";
import React from "react";
import RandomQuotes from "../RandomQuotes";

const RandomQuotesSection = () => {
    return ( <div className="container mx-auto px-4 py-10">
        <div className="flex flex-row justify-center items-center gap-2  mb-10">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate text-center">Random Quotes</h2>
            <span>|</span>
            <Link to="/quotes" className="text-lg font-medium leading-5 underline text-gray-600">View More</Link>
        </div>
        <RandomQuotes />
    </div>
    )
}

export default RandomQuotesSection