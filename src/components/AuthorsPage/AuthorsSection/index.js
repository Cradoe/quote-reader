import React, { useEffect, useState } from "react";
import { listAuthorsModel } from "../../../models/listAuthorsModel";
import Pagination from "../../Pagination";
import AuthorCard from "../../AuthorCard";
import Loader from "../../Loader";



const AuthorsSection = ( { currentPage } ) => {

    const [ authors, setAuthors ] = useState( [] ),
        [ isFetching, setIsFetching ] = useState( false ),
        [ totalPages, setTotalPages ] = useState( 0 );



    useEffect( () => {

        const
            successCallback = ( data ) => {
                setAuthors( data.items );
                setTotalPages( data.totalPages );
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
                console.log( "fetching" );
                listAuthorsModel( callback, currentPage )
            };


        fetchDataFromServer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ currentPage ] )

    return (
        <>
            {isFetching ?
                <Loader />
                :
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {
                            authors.map( ( author, index ) => (
                                <AuthorCard author={author} key={index} />
                            ) )
                        }
                    </div>

                    <Pagination route="/authors" noPerPage={20} currentPage={currentPage} totalPages={totalPages} />
                </>
            }
        </>
    )
}

export default AuthorsSection;