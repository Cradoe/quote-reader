import AudioPlayControls from "../AudioPlayControls";
import ShareButton from "../ShareButton";
import CopyButton from "../CopyButton";

const QuoteItemFooter = ( { quote } ) => {
    return (
        <div className="bg-gray-50 text-gray-500 dark:bg-gray-600 dark:text-gray-200 rounded-b-xl ">
            <div className="space-y-2 px-10">
                <div className="relative mb-8">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="bg-cyan-500 dark:bg-cyan-400 w-full h-1"></div>
                    </div>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex-auto flex items-center justify-evenly">
                    <CopyButton quote={quote} />
                </div>
                <AudioPlayControls content={quote.content} id={quote._id} />

                <div className="flex-auto flex items-center justify-evenly">
                    <ShareButton content={quote.content} />
                </div>
            </div>
        </div>
    )
}

export default QuoteItemFooter;