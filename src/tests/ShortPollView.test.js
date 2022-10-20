import * as React from 'react';
import { render } from '@testing-library/react';
import ShortPollView from "../components/ShortPollView";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { MemoryRouter as Router} from "react-router-dom";

describe('ShortPollView', () => {
    const mockStore = configureStore([thunk]);

    it('matches the snapshot when data is passed', () => {
        const store = mockStore({
            questions : {
                "8xf0y6ziyjabvozdd253nd": {
                    id: '8xf0y6ziyjabvozdd253nd',
                    author: 'sarahedo',
                    timestamp: 1467166872634,
                    optionOne: {
                        votes: ['sarahedo'],
                        text: 'Build our new application with Javascript',
                    },
                    optionTwo: {
                        votes: [],
                        text: 'Build our new application with Typescript'
                    }
                }
            }})

        const id = "8xf0y6ziyjabvozdd253nd";
       
        const component = render(
            <Provider store={store} >
                    <Router>
                        <ShortPollView id={id}/>
                    </Router>
            </Provider>
            
        );
        expect(component).toMatchSnapshot();
    });

});
