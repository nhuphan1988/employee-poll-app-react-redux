# Employee Polls App - React and Redux

This web app is for creating polls for coworkers where an employee can post a scenario question with 2 possible responses and then other employees respond. Employees can then vote on these responses and see which have the most votes. The goal is to improve collaboration and transparency within the company. The web app will provide a dashboard that lists every employee ordered by the number of polls they’ve created and answered. The app used React to render UI and used Redux to manage global state and pass data through the UI.

## Getting started

To get started developing right away:

- clone the Project
- install all project dependencies with `npm install`
- start the development server with `npm start`

## Running the tests

- test used jest, @testing-library/react, and @testing-library/jest-dom
- run the test with `npm test`

- there are 10 tests in total:

1. _saveQuestion(): An async unit test to verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.

2. _saveQuestion(): An async unit test to verify that an error is returned if incorrect data is passed to the function.

3. _saveQuestionAnswer(): An async unit test to verify that true is returned when correctly formatted data is passed to the function.

4. _saveQuestionAnswer(): An async unit test to verify that an error is returned if incorrect data is passed to the function.

5. NewPoll component: toMatchSnapshot()

6. ShortPollView component: toMatchSnapshot()

7. Leaderboard component: is displaying the correct user name, number of questions asked, and number of questions answered

8. LoginBox component: will have all expected fields (username, password, submit button).

9. LoginBox component: will have an error on the page when user entering incorrect username or password.

10. Nav component: navigation bar displays all expected links.

## Built With

- React: to render UI, manage local state and handle lifecycle events
- Redux: to manage global state, handle async network requests, pass data through UI
- Jest: to test the app

## Author
- Nhu Phan

## App Functionality

1. User can log in and log out:
- The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.
- Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown (private routes)
- List of username and password to log in:

| id | password |
|-----------------|------------------|
|sarahedo |password123
|tylermcginnis|abc321
|mtsamis |xyz123
|zoshikanlu |pass246

2. Home Page/Dashboard:
- Has answered and unanswered polls. Polling question resides in correct category
- A polling question links to details of that poll

3. PollPage:
- The details of the poll are available at "questions/:question_id".
- Poll datails includes: avatar of author, two options, number and percentage of votes for each option.
- User is able to vote. Upon voting, all information is displayed, including user's response. When user come back to homepage, the polling question appears in "Answered" section. Data of leaderboard will change accordingly.

4. Add New Poll:
- The form is available at "/add".
- Upon submitting the form, a new poll is created. The new polling question appears in the correct category on the home page.

5. Leaderboard:
- The Leaderboard is available at "/leaderboard".
- Each entry contains the following: username, user's avatar, number of questions asked, number of questions answered, ordered descendingly based on sum of number of questions asked, then by number of questions answered.

6. Navigation:
- Navigation bar is visiable at all pages, and include authedUser's name and avatar.
- User can navigate between homepage, leaderboad, new form, logout.

