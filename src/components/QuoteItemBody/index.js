import { Link } from "@reach/router";

const QuoteItemBody = ( { quote } ) => {
    return (
        <div className="bg-white border-gray-100 dark:bg-gray-800 dark:border-gray-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
            <div className="flex items-center space-x-4">
                <img src="https://tailwindcss.com/_next/static/media/full-stack-radio.485d0b2c6e3aa1cacc6b50e462cd3675.png" alt="" width="88" height="88" className="flex-none rounded-lg bg-gray-100" />
                <div className="min-w-0 flex-auto space-y-1 font-semibold">
                    <p className="text-cyan-500 dark:text-cyan-400 text-sm leading-6 capitalize">
                        {quote.tags.toString().replace( "-", " " )}
                    </p>
                    <h2 className="text-gray-500 dark:text-gray-400 text-sm leading-6 truncate">
                        {quote.content}
                    </h2>
                    <p className="text-gray-900 dark:text-gray-50 text-lg">
                        <Link to={`/author/${quote.authorSlug}`}>{quote.author}</Link>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default QuoteItemBody;