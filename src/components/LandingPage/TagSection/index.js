import React from "react";
import TagGrid from "../../TagGrid";

const TagSection = () => {
    return ( <div className="container mx-auto px-4 py-10">
        <div className="flex flex-row justify-center items-center gap-2  mb-10">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate text-center">Available Tags</h2>
        </div>
        <TagGrid />
    </div>
    )
}

export default TagSection