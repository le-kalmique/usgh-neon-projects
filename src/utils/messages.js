import React from 'react';

import { Redirect } from 'react-router-dom';

const Messages = {
    Empty : "",
    ServerError : "Server error occured",
    ConnectionError : "There are some troubles with Your internet connection",
    NotFound : "Record with such id doesn't exist",
    Loading : "Loading...",
    Forbidden : "You have no right to access this page",
    Unauthorized : (pathname) => <Redirect to= { "/auth/login?info=mustLogin&redirect=" + pathname } />,
    Redirect : (location) => <Redirect to= { location } />,
    Saved : "Saved",
    QueryWithNoResults : "Nothing was found. Try another search term.",
    NothingToShow : "There's nothing to see so far",
    Successfully : "Successfully"
}

export default Messages;