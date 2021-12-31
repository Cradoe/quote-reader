import React, { useEffect, useState } from "react";
import { listTagsModel } from "../../models/listTagsModel";
import Loader from "../Loader";
import TagItem from "../TagItem";



const TagGrid = () => {

    const [ tags, setTags ] = useState( [] ),
        [ isFetching, setIsFetching ] = useState( false );



    useEffect( () => {

        const
            successCallback = ( data ) => {
                setTags( data )
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
                listTagsModel( callback )
            };


        if ( !tags || tags.length === 0 ) {
            fetchDataFromServer();
        }
    }, [ tags, isFetching ] )

    return (
        <>
            {isFetching ?

                <Loader />
                :
                <div className="flex flex-wrap gap-2 gap-y-6  justify-center">
                    {
                        tags.map( ( tag, index ) => (
                            <TagItem tag={tag} key={index} />
                        ) )
                    }
                </div>}
        </>


    )
}

export default TagGrid;