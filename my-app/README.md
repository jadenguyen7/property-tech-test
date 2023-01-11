## Summary

This is a simple React application that enables agents to manage property listings. The agent will be able to:

- View a list of properties for sale
- Mark an individual property listing as expired
- See which properties are `active` and which have been `expired`.

For the purpose of this project, I have fetched mock data using Mock Service Worker. The application is thoroughly tested with Jest tests.

## Scripts

To start the app, navigate to `/my-app` and run:

### `npm i`

then

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run tests:

### `npm test`

## Improvements

If I had more time to do this project, I would add error handling for scenarios such as API fetching failures. I would return a human readable message that makes it clear to the user what the failure is.

I would style the page further to show more of my css skills. I would change the layout so that the list of properties is easier to view.

I would make the app responsive so that it is functional on all device sizes.

I would build a view with no filter so that the agent is able to view both active and expired listings together.

I would look into the `Manifest: Line: 1, column: 1, Syntax error.` error that is being returned in the console.
