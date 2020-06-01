# VF Crypto

Single page React application for Virtual Forge. View the application online at [https://nostalgic-albattani-90e207.netlify.app/](https://nostalgic-albattani-90e207.netlify.app/)

## Running the application

The app uses [Parcel](https://parceljs.org/) as an application bundler.

### Run the application locally

To run the application locally using Parcel's development server:

- Run `npm install` to install application dependencies
- Run `npm run start:dev` to run the application in development mode
- The application will be running on `http://localhost:8080`

### Build the application

To bundle the application for deployment to a production environment:

- Run `npm run build` to build an optimised version of the app to the `dist` directory

## Testing the application

The app uses [Jest](https://jestjs.io/en/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) as test runners. To test the application:

- Run `npm test` to run all tests


## Notes

There are a number of known outstanding issues with the app that would have been addressed if more time was available:

### Testing

The test coverage for the application does not meet the requirements for a production ready application. In particular there was not enough time available to implement React Testing Library test providers for interacting with Redux and styled components' theme provider. This means the app lacks any meaningful integration tests.

Hopefully the following tests serve as an example of how that coverage could be increased:

- [src/state/assets/selectors.test.js](src/state/assets/selectors.test.js)
- [src/pages/home/assets-table/assets-table.test.jsx](src/pages/home/assets-table/assets-table.test.jsx)

### Cryptocurrency ranking styles

The styles on the homepage do not exactly match the styles in the supplied design. The full page width styles are tricky to implement using a `<table>` element. These styles could have been achieved if different markup was used, however the decision was taken to use semantic markup over exact adherence to the design.

### CSS architecture

The application uses a very basic [CSS reset](src/app.jsx) and [theme](src/theme.js) implementation. These would both need to be addresssed to ensure a production ready and maintainable application.

### Responsive styles

The application is not fully responsive; there are known issues with the page header and the homepage table. Given more time these styling issues could have been addressed. There is some responsive styling on the cryptocurrency detail page. As no designs were supplied for smaller width devices, this was not deemed a priority.

### Browser support

The application has only been tested using the latest versions of Chrome and Firefox

### Error handling

There is basic handling of errors for API requests, however a more robust error handling architecture is required for a production ready application. A good starting point would be to implement a global [error boundary](https://reactjs.org/docs/error-boundaries.html).
