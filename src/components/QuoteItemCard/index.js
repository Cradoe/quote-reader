
import { Fade } from 'react-awesome-reveal';
import QuoteItemBody from "../QuoteItemBody";
import QuoteItemFooter from "../QuoteItemFooter";

const QuoteItemCard = ( { quote } ) => {
    return (
        <Fade direction="bottom">
            <div aria-label="quote card" className="shadow hover:scale-105 md:hover:scale-110 transition-all duration-500 hover:shadow-xl  ease-in-out delay-100">
                <QuoteItemBody quote={quote} />
                <QuoteItemFooter quote={quote} />
            </div>
        </Fade>
    )
}

export default QuoteItemCard;