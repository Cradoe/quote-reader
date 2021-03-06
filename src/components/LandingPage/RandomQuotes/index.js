import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listQuotesModel } from "../../../models/listQuotesModel";
import { shuffleArray } from "../../../utils/common";
import Loader from "../../Loader";
import QuoteItemCard from "../../QuoteItemCard";



const RandomQuotes = () => {

    const quotes = useSelector( state => state.quote ),
        [ isFetching, setIsFetching ] = useState( false ),
        [ shortlistedQuotes, setShortlistedQuotes ] = useState( [] );


    const dispatch = useDispatch();


    useEffect( () => {

        const
            shuffleAndSelectSix = () => {
                const shuffledQuotes = shuffleArray( quotes.items );
                setShortlistedQuotes( shuffledQuotes.slice( 0, 6 ) );
                setIsFetching( false );
            },
            fetchDataFromServer = () => {
                setIsFetching( true );
                dispatch( listQuotesModel() )
            };


        if ( !quotes || !quotes.items || quotes.items.length === 0 ) {
            fetchDataFromServer();
        } else {
            shuffleAndSelectSix();
        }
    }, [ quotes, isFetching, dispatch ] )

    return (
        <>
            {isFetching ?
                <Loader /> :
                <div data-testid="shortlisted-quotes" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 ">
                    {
                        shortlistedQuotes.map( ( quote, index ) => (
                            <QuoteItemCard quote={quote} key={index} />
                        ) )
                    }
                </div>}
        </>


    )
}

export default RandomQuotes;