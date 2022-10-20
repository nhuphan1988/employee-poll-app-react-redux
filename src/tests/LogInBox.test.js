import LogInBox from "../components/LogInBox";
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import { MemoryRouter as Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import '@testing-library/jest-dom';

describe('LogInBox', () => {
    const mockStore = configureStore([thunk]);

    const store = mockStore({users: {
        tylermcginnis: {
            id: 'tylermcginnis',
            password:'abc321',
            name: 'Tyler McGinnis',
            avatarURL: "https://cdn.pixabay.com/photo/2014/04/02/14/10/boy-306371_960_720.png",
            answers: {
              "vthrdm985a262al8qx3do": 'optionOne',
              "xj352vofupe1dqz9emx13r": 'optionTwo',
            },
            questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
          },
    }});

    it('will have all expected fields', () => {
        const component = render(
            <Provider store={store} >
                <Router>
                    <LogInBox />
                </Router>
            </Provider>
            );

        let usernameInput = component.getByTestId("username-input");
        let passwordInput = component.getByTestId("password-input");
        let submitButton = component.getByTestId("submit-button");
     
        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    it('will have an error on the page when user entering incorrect username or password', () => {
        const component = render(
            <Provider store={store} >
                <Router>
                    <LogInBox />
                </Router>
            </Provider>
            );
            
        let usernameInput = component.getByTestId("username-input");
        let passwordInput = component.getByTestId("password-input");

        fireEvent.change(usernameInput, { target: { value: 'tylermcginnis' } });
        fireEvent.change(passwordInput, { target: { value: 'abc' } });

        let submitButton = component.getByTestId("submit-button");
     
        fireEvent.click(submitButton);

        expect(component.getByTestId('error-header')).toBeInTheDocument();
    });
})
