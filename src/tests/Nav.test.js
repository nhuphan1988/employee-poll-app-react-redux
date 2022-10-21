import Nav from "../components/Nav";
import * as React from 'react';
import { render} from '@testing-library/react';
import { Provider } from "react-redux";
import { MemoryRouter as Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import '@testing-library/jest-dom';

describe('Nav', () => {
    const mockStore = configureStore([thunk]);

    it('navigation bar displays all expected links', () => {
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
        },
		authedUser: 'tylermcginnis',
		});

        const component = render(
            <Provider store={store} >
                    <Router>
                        <Nav />
                    </Router>
            </Provider>
            
        );
        const homeLink = component.getByTestId("home");
		const leaderboardLink = component.getByTestId("leaderboard");
		const newLink = component.getByTestId("new");
		const avatar = component.getByTestId("avatar");
		const username = component.getByTestId("username");
		const logoutLink = component.getByTestId("logout");

        expect(homeLink).toBeInTheDocument();
		expect(leaderboardLink).toBeInTheDocument();
		expect(newLink).toBeInTheDocument();
		expect(avatar).toBeInTheDocument();
		expect(username).toBeInTheDocument();
		expect(logoutLink).toBeInTheDocument();
    });
})
