import { render, screen } from "@testing-library/react";
import AudioPlayControls from "./";
import { Provider } from 'react-redux';
import { store } from "../../redux/store";


let testContent = "To be wronged is nothing unless you continue to remember it.";
let testQuoteId = "Oh-e1-oygRPX";

test( "Expect audio loader button on render", async () => {

    render(
        <Provider store={store}>
            <AudioPlayControls content={testContent} id={testQuoteId} />
        </Provider> );

    const button = await screen.findByTestId( `load-button-${testQuoteId}` );
    expect( button ).toBeInTheDocument();
    expect( button ).toBeEnabled();
} );

