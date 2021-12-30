import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from '@reach/router'

export default function Pagination ( { route, currentPage, totalPages, noPerPage } ) {
    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                <Link
                    to={`${route}/${Number( currentPage ) > 1 ? Number( currentPage ) - 1 : 1}`}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    Previous
                </Link>
                <Link
                    to={`${route}/${Number( currentPage ) < Number( totalPages ) ? Number( currentPage ) + 1 : totalPages}`}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    Next
                </Link>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{currentPage}</span> to <span className="font-medium">{currentPage * noPerPage}</span> of{' '}
                        <span className="font-medium">{totalPages * noPerPage}</span> results
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <Link
                            to={`${route}/${Number( currentPage ) > 1 ? Number( currentPage ) - 1 : 1}`}
                            className="relative inline-flex items-center px-8 py-4  rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            <span>Previous</span>
                        </Link>

                        <Link
                            to={`${route}/${Number( currentPage ) < Number( totalPages ) ? Number( currentPage ) + 1 : totalPages}`}

                            className=" relative inline-flex items-center px-8 py-4  rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span>Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}
