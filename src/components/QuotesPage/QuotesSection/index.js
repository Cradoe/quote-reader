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
        [ shortlistedQuotes, setShortlistedQuotes ] = useState( [] );


    const dispatch = useDispatch();


    useEffect( () => {

        const
            shuffleAndSelectSix = () => {
                setShortlistedQuotes( shuffleArray( quotes.items ) );
            },
            successCallback = () => {

                setIsFetching( false );
            },
            errorCallback = ( error ) => {
                setIsFetching( false );
                alert( error );
            },
            callback = {
                success: successCallback,
                error: errorCallback,
            },
            fetchDataFromServer = () => {
                setIsFetching( true );
                dispatch( listQuotesModel( callback, currentPage ) )
            };
        if ( !quotes || !quotes.items || quotes.items.length === 0 || quotes.page !== currentPage ) {
            fetchDataFromServer();
        } else {
            shuffleAndSelectSix();
        }
    }, [ quotes, isFetching, currentPage, dispatch ] )

    return (
        <>
            {isFetching ?
                <Loader />

                :
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        {
                            shortlistedQuotes.map( ( quote, index ) => (
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