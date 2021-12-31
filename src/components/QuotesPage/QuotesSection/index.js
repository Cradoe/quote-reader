import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listQuotesModel } from "../../../models/listQuotesModel";
import { shuffleArray } from "../../../utils/common";
import Loader from "../../Loader";
import Pagination from "../../Pagination";
import QuoteItemCard from "../../QuoteItemCard";



const QuotesSection = ( { currentPage } ) => {

    const quotes = useSelector( state => state.quote ),
        [ isFetching, setIsFetching ] = useState( false ),
        [ shuffledQuotes, setShuffledQuotes ] = useState( [] );


    const dispatch = useDispatch();


    useEffect( () => {

        const
            fetchDataFromServer = () => {
                setIsFetching( true );
                dispatch( listQuotesModel( currentPage ) )
            };
        if ( !quotes || !quotes.items || quotes.items.length === 0 || quotes.page !== currentPage ) {
            fetchDataFromServer();
        } else {
            setIsFetching( false );
            setShuffledQuotes( shuffleArray( quotes.items ) );
        }
    }, [ quotes, isFetching, currentPage, dispatch ] )

    return (
        <>
            {isFetching ?
                <Loader />

                :
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-10 ">
                        {
                            shuffledQuotes.map( ( quote, index ) => (
                                <QuoteItemCard quote={quote} key={index} />
                            ) )
                        }
                    </div>

                    <Pagination route="/quotes" noPerPage={20} currentPage={currentPage} totalPages={quotes.totalPages} />
                </>
            }
        </>

    )
}

export default QuotesSection;