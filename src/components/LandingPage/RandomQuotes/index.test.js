

import { render } from "@testing-library/react";

import { Provider } from 'react-redux';
import { store } from "../../../redux/store";
import RandomQuotes from "./";

it( "Expect not have quotes on page load", async () => {
    const { queryByTestId } = render(
        <Provider store={store}>
            <RandomQuotes />
        </Provider>
    );

    expect( queryByTestId( 'shortlisted-quotes' ) ).toBeFalsy()
} );

