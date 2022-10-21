# Employee Polls App - React and Redux

Employees can use this app internally in order to improve collaboration and transparency within the company, every employee can access the application and create a poll with two proposed solutions.

## App Functionality
1. User can log in and log out:
- The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.
- Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown (private routes)
- List of username and password to log in:
| id | password |
|-----------------|------------------|
|'sarahedo' |'password123'
|'tylermcginnis'|'abc321'
|'mtsamis' |'xyz123',
|'zoshikanlu' |'pass246'

2. Home Page/Dashboard:
- Has answered and unanswered polls. Polling question resides in correct category
- A polling question links to details of that poll

3. PollPage:
- The details of the poll are available at "questions/:question_id".
- Poll datails includes: avatar of author, two options, number and percentage of votes for each option.
- User is able to vote. Upon voting, all information is displayed, including user's response. When user come back to homepage, the polling question appears in "Answered" section. Data of leaderboard will change accordingly.

4. Add New Poll:
- The form is available at "/new".
- Upon submitting the form, a new poll is created. The new polling question appears in the correct category on the home page.

5. Leaderboard:
- The Leaderboard is available at "/leaderboard".
- Each entry contains the following: username, user's avatar, number of questions asked, number of questions answered, ordered descendingly based on sum of number of questions asked, then by number of questions answered.

6. Navigation:
- Navigation bar is visiable at all pages, and include authedUser's name and avatar.
- User can navigate between homepage, leaderboad, new form, logout.

## Architecture
1. The store is the application’s source of truth.
2. Most application state is managed by the Redux store. 
3. Form inputs and controlled components may have some state handled by the component.
4. Updates are triggered by dispatching action creators to reducers.

## Unit Testing using jest
The application requires `npm start test` in order to run all the unit tests in the project.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
