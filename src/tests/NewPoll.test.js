import NewPoll from "../components/NewPoll";
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import { MemoryRouter as Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import '@testing-library/jest-dom';

describe('NewPoll', () => {
    const mockStore = configureStore([thunk]);

    it('matches the snapshot when data is passed', () => {
        const store = mockStore({})

        const component = render(
            <Provider store={store} >
                    <Router>
                        <NewPoll/>
                    </Router>
            </Provider>
            
        );
        expect(component).toMatchSnapshot();
    });

});