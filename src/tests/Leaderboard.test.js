import Leaderboard from "../components/Leaderboard";
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import { MemoryRouter as Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import '@testing-library/jest-dom';

describe('Leaderboard', () => {
    const mockStore = configureStore([thunk]);

    it('Leaderboard is displaying the correct user name, number of questions asked, and number of questions answered', () => {
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
        const {users} = store.getState();

        const component = render(
            <Provider store={store} >
                    <Router>
                        <Leaderboard />
                    </Router>
            </Provider>
            
        );
        const username = component.getByTestId("username").innerHTML;
        const numofAnswers = component.getByTestId("numofAnswers").innerHTML;
        const numofQuestions = component.getByTestId("numofQuestions").innerHTML;

        expect(username).toEqual(users['tylermcginnis'].name);
        expect(numofAnswers).toBe(Object.keys(users['tylermcginnis'].answers).length.toString());
        expect(numofQuestions).toBe(users['tylermcginnis'].questions.length.toString());
    });
})
