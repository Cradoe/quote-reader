
import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../../components/NavBar";
import AuthorsSection from "../../components/AuthorsPage/AuthorsSection";

const AuthorsPage = ( { page } ) => {

    const currentPage = page ? page : 1;

    return (
        <>
            <Helmet>
                <title>Authors - Quote Reader</title>
            </Helmet>
            <NavBar />
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-row justify-center items-center gap-2  mb-10">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate text-center">Authors</h2>
                </div>
                <AuthorsSection currentPage={currentPage} />
            </div>
        </>
    )
}

export default AuthorsPage