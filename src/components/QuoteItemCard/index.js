
import QuoteItemBody from "../QuoteItemBody";
import QuoteItemFooter from "../QuoteItemFooter";

const QuoteItemCard = ( { quote } ) => {
    return (
        <div className="shadow hover:scale-105 md:hover:scale-110 transition-all duration-500 hover:shadow-xl  ease-in-out delay-100">
            <QuoteItemBody quote={quote} />
            <QuoteItemFooter quote={quote} />
        </div>
    )
}

export default QuoteItemCard;