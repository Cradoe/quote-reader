import React, { useEffect, useState } from "react";
import { listAuthorsModel } from "../../../models/listAuthorsModel";
import { shuffleArray } from "../../../utils/common";
import AuthorCard from "../../AuthorCard";
import Loader from "../../Loader";



const RandomAuthors = () => {

    const [ authors, setAuthors ] = useState( [] ),
        [ isFetching, setIsFetching ] = useState( false ),
        [ shortlistedAuthors, setShortlistedAuthors ] = useState( [] );



    useEffect( () => {

        const
            shuffleAndSelectSix = () => {
                const shuffledAuthors = shuffleArray( authors );
                setShortlistedAuthors( shuffledAuthors.slice( 0, 6 ) );
            },
            successCallback = ( data ) => {
                setAuthors( data.items )
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
                listAuthorsModel( callback )
            };


        if ( !authors || authors.length === 0 ) {
            fetchDataFromServer();
        } else {
            shuffleAndSelectSix();
        }
    }, [ authors, isFetching ] )

    return (
        <>
            {
                isFetching ?
                    <Loader />
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        {
                            shortlistedAuthors.map( ( author, index ) => (
                                <AuthorCard author={author} key={index} />
                            ) )
                        }
                    </div>
            }
        </>


    )
}

export default RandomAuthors;